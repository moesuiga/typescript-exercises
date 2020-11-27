/*

Intro:
介绍（场景导入）：

    Time to filter the data! In order to be flexible
    we filter users using a number of criteria and
    return only those matching all of the criteria.
    We don't need Admins yet, we only filter Users.
    是时候过滤数据了!
    为了更加灵活，我们使用许多条件筛选用户，
    并只返回那些匹配所有条件的用户。
    我们还不需要管理员，我们只过滤用户。

Exercise:
练习（目标）：

    Without duplicating type structures, modify
    filterUsers function definition so that we can
    pass only those criteria which are needed,
    and not the whole User information as it is
    required now according to typing.
    在不复制类型结构的情况下，
    修改filterUsers函数定义，
    以便我们能只通过那些需要的条件，
    而不是根据键入现在需要的全部用户信息。

Higher difficulty bonus exercise:
高难度奖励练习：

    Exclude "type" from filter criterias.
    从筛选标准中排除 "type"。

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

export type Person = User | Admin;

export const persons: Person[] = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    {
        type: 'admin',
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        type: 'user',
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        type: 'admin',
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    },
    {
        type: 'user',
        name: 'Wilson',
        age: 23,
        occupation: 'Ball'
    },
    {
        type: 'admin',
        name: 'Agent Smith',
        age: 23,
        role: 'Administrator'
    }
];

export const isAdmin = (person: Person): person is Admin => person.type === 'admin';
export const isUser = (person: Person): person is User => person.type === 'user';

export function logPerson(person: Person) {
    let additionalInformation = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

export function filterUsers(persons: Person[], criteria: User): User[] {
    return persons.filter(isUser).filter((user) => {
        const criteriaKeys = Object.keys(criteria) as (keyof User)[];
        return criteriaKeys.every((fieldName) => {
            return user[fieldName] === criteria[fieldName];
        });
    });
}

console.log('Users of age 23:');

filterUsers(
    persons,
    {
        age: 23
    }
).forEach(logPerson);

// In case if you are stuck:
// 万一你卡住了:
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#mapped-types
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#predefined-conditional-types
