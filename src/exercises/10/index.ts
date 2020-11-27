/*

Intro:
介绍（场景导入）：

    We have asynchronous functions now, advanced technology.
    This makes us a tech startup officially now.
    But one of the consultants spoiled our dreams about
    inevitable future IT leadership.
    He said that callback-based asynchronicity is not
    popular anymore and everyone should use Promises.
    He promised that if we switch to Promises, this would
    bring promising results.
    我们现在有异步功能，先进的技术。
    这让我们正式成为了一家科技创业公司。
    但其中一位顾问破坏了我们关于未来不可避免的IT领导地位的梦想。
    他说，基于回调的异步性已经不流行了，每个人都应该使用 Promise。
    他承诺，如果我们转向 Promise，这将带来有希望的结果。

Exercise:
练习（目标）：

    We don't want to reimplement all the data-requesting
    functions. Let's decorate the old callback-based
    functions with the new Promise-compatible result.
    The final function should return a Promise which
    would resolve with the final data directly
    (i.e. users or admins) or would reject with an error
    (or type Error).
    我们不想重新实现所有的数据请求函数。
    让我们用新的与 Promise 兼容的结果来装饰旧的基于回调的函数。
    最终函数应该返回一个 Promise，它将直接解决最终数据(即用户或管理员)，
    或者拒绝一个错误(或类型错误)。

    The function should be named promisify.
    这个函数应该命名为 promisify。

Higher difficulty bonus exercise:
高难度奖励练习：

    Create a function promisifyAll which accepts an object
    with functions and returns a new object where each of
    the function is promisified.
    创建一个函数 promisifyAll，它接受一个带有函数的对象，
    并返回一个新对象，其中每个函数都是 promisified。

    Rewrite api creation accordingly:
    照着重写api创建：

        const api = promisifyAll(oldApi);

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

export type ApiResponse<T> = (
    {
        status: 'success';
        data: T;
    } |
    {
        status: 'error';
        error: string;
    }
);

export function promisify(arg: unknown): unknown {
    return null;
}

const oldApi = {
    requestAdmins(callback: (response: ApiResponse<Admin[]>) => void) {
        callback({
            status: 'success',
            data: admins
        });
    },
    requestUsers(callback: (response: ApiResponse<User[]>) => void) {
        callback({
            status: 'success',
            data: users
        });
    },
    requestCurrentServerTime(callback: (response: ApiResponse<number>) => void) {
        callback({
            status: 'success',
            data: Date.now()
        });
    },
    requestCoffeeMachineQueueLength(callback: (response: ApiResponse<number>) => void) {
        callback({
            status: 'error',
            error: 'Numeric value has exceeded Number.MAX_SAFE_INTEGER.'
        });
    }
};

export const api = {
    requestAdmins: promisify(oldApi.requestAdmins),
    requestUsers: promisify(oldApi.requestUsers),
    requestCurrentServerTime: promisify(oldApi.requestCurrentServerTime),
    requestCoffeeMachineQueueLength: promisify(oldApi.requestCoffeeMachineQueueLength)
};

function logPerson(person: Person) {
    console.log(
        ` - ${person.name}, ${person.age}, ${person.type === 'admin' ? person.role : person.occupation}`
    );
}

async function startTheApp() {
    console.log('Admins:');
    (await api.requestAdmins()).forEach(logPerson);
    console.log();

    console.log('Users:');
    (await api.requestUsers()).forEach(logPerson);
    console.log();

    console.log('Server time:');
    console.log(`   ${new Date(await api.requestCurrentServerTime()).toLocaleString()}`);
    console.log();

    console.log('Coffee machine queue length:');
    console.log(`   ${await api.requestCoffeeMachineQueueLength()}`);
}

startTheApp().then(
    () => {
        console.log('Success!');
    },
    (e: Error) => {
        console.log(`Error: "${e.message}", but it's fine, sometimes errors are inevitable.`);
    }
);

// In case if you are stuck:
// 万一你卡住了:
// https://www.typescriptlang.org/docs/handbook/generics.html
