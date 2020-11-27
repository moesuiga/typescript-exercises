/*

Intro:
介绍（场景导入）：

    As we introduced "type" to both User and Admin
    it's now easier to distinguish between them.
    Once object type checking logic was extracted
    into separate functions isUser and isAdmin -
    logPerson function got new type errors.
    当我们向用户和管理员引入了“type”时，现在就能更容易地区分它们了。
    一旦对象类型检查逻辑被提取到单独的函数 isUser和isAdmin 中 -
    logPerson函数就会出现新的类型错误。

Exercise:
练习（目标）：

    Figure out how to help TypeScript understand types in
    this situation and apply necessary fixes.
    找出如何帮助TypeScript在这种情况下理解类型，并应用必要的修复。

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
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
];

export function isAdmin(person: Person) {
    return person.type === 'admin';
}

export function isUser(person: Person) {
    return person.type === 'user';
}

export function logPerson(person: Person) {
    let additionalInformation: string = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);

console.log();

console.log('Users:');
persons.filter(isUser).forEach(logPerson);

// In case if you are stuck:
// 万一你卡住了:
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#using-type-predicates
