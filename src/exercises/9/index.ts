/*

Intro:
介绍（场景导入）：

    PowerUsers idea was bad. Once those users got
    extended permissions, they started bullying others
    and we lost a lot of great users.
    As a response we spent all the remaining money
    on the marketing and got even more users.
    We need to start preparing to move everything to a
    real database. For now we just do some mocks.
    PowerUsers的想法很糟糕。一旦这些用户获得了扩展的权限，
    他们就开始欺负其他人，我们就失去了很多优秀的用户。
    作为回应，我们把剩下的钱都花在了市场推广上，并获得了更多的用户。
    我们需要开始准备将所有内容转移到一个真正的数据库中。现在我们只做一些模拟。

    The server API format was decided to be the following:
    服务器API格式决定如下:

    In case of success: { status: 'success', data: RESPONSE_DATA }
    In case of error: { status: 'error', error: ERROR_MESSAGE }
    如果成功：{ status: 'success', data: RESPONSE_DATA }
    如果失败：{ status: 'error', error: ERROR_MESSAGE }

    The API engineer started creating types for this API and
    quickly figured out that the amount of types needed to be
    created is too big.
    API工程师开始为这个API创建类型，并很快发现需要创建的类型太多了。

Exercise:
练习（目标）：

    Remove UsersApiResponse and AdminsApiResponse types
    and use generic type ApiResponse in order to specify API
    response formats for each of the functions.
    删除 UsersApiResponse 和 AdminsApiResponse 类型，
    并使用通用类型 ApiResponse，以便为每个函数指定API响应格式。

*/

interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

type Person = User | Admin;

const admins: Admin[] = [
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
];

const users: User[] = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' }
];

export type ApiResponse<T> = unknown;

type AdminsApiResponse = (
    {
        status: 'success';
        data: Admin[];
    } |
    {
        status: 'error';
        error: string;
    }
);

export function requestAdmins(callback: (response: AdminsApiResponse) => void) {
    callback({
        status: 'success',
        data: admins
    });
}

type UsersApiResponse = (
    {
        status: 'success';
        data: User[];
    } |
    {
        status: 'error';
        error: string;
    }
);

export function requestUsers(callback: (response: UsersApiResponse) => void) {
    callback({
        status: 'success',
        data: users
    });
}

export function requestCurrentServerTime(callback: (response: unknown) => void) {
    callback({
        status: 'success',
        data: Date.now()
    });
}

export function requestCoffeeMachineQueueLength(callback: (response: unknown) => void) {
    callback({
        status: 'error',
        error: 'Numeric value has exceeded Number.MAX_SAFE_INTEGER.'
    });
}

function logPerson(person: Person) {
    console.log(
        ` - ${person.name}, ${person.age}, ${person.type === 'admin' ? person.role : person.occupation}`
    );
}

function startTheApp(callback: (error: Error | null) => void) {
    requestAdmins((adminsResponse) => {
        console.log('Admins:');
        if (adminsResponse.status === 'success') {
            adminsResponse.data.forEach(logPerson);
        } else {
            return callback(new Error(adminsResponse.error));
        }

        console.log();

        requestUsers((usersResponse) => {
            console.log('Users:');
            if (usersResponse.status === 'success') {
                usersResponse.data.forEach(logPerson);
            } else {
                return callback(new Error(usersResponse.error));
            }

            console.log();

            requestCurrentServerTime((serverTimeResponse) => {
                console.log('Server time:');
                if (serverTimeResponse.status === 'success') {
                    console.log(`   ${new Date(serverTimeResponse.data).toLocaleString()}`);
                } else {
                    return callback(new Error(serverTimeResponse.error));
                }

                console.log();

                requestCoffeeMachineQueueLength((coffeeMachineQueueLengthResponse) => {
                    console.log('Coffee machine queue length:');
                    if (coffeeMachineQueueLengthResponse.status === 'success') {
                        console.log(`   ${coffeeMachineQueueLengthResponse.data}`);
                    } else {
                        return callback(new Error(coffeeMachineQueueLengthResponse.error));
                    }

                    callback(null);
                });
            });
        });
    });
}

startTheApp((e: Error | null) => {
    console.log();
    if (e) {
        console.log(`Error: "${e.message}", but it's fine, sometimes errors are inevitable.`)
    } else {
        console.log('Success!');
    }
});

// In case if you are stuck:
// 万一你卡住了:
// https://www.typescriptlang.org/docs/handbook/generics.html
