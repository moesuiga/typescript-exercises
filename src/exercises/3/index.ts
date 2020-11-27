/*

Intro:
介绍（场景导入）：

    Since we already have some of the additional
    information about our users, it's a good idea
    to output it in a nice way.
    因为我们已经有了一些关于用户的额外信息，
    所以最好以一种好的方式输出这些信息。

Exercise:
练习（目标）：

    Fix type errors in logPerson function.
    修正logPerson函数中的类型错误。

    logPerson function should accept both User and Admin
    and should output relevant information according to
    the input: occupation for User and role for Admin.
    logPerson函数应该同时接受 User 和 Admin，
    并根据输入来输出相关信息: User 的 occupation 和 Admin 的 role。

*/

interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(person: Person) {
    let additionalInformation: string;
    if (person.role) {
        additionalInformation = person.role;
    } else {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);

// In case if you are stuck:
// 万一你卡住了:
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#using-the-in-operator
