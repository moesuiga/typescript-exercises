/*

Intro:
介绍（场景导入）：

    All 2 users liked the idea of the community. We should go
    forward and introduce some order. We are in Germany after all.
    Let's add a couple of admins.
    所有2个用户都喜欢这个社区的想法。
    我们应该向前走，介绍一些 order【规则？顺序？订单？不知道该怎么翻译】。毕竟我们是在德国。
    让我们添加几个管理员。

    Initially we only had users in the in-memory database. After
    introducing Admins, we need to fix the types so that
    everything works well together.
    最初，我们只有内存数据库中的用户。
    在介绍了管理员之后，我们需要修复类型，以便一切都能很好地协同工作。

Exercise:
练习（目标）：

    Type "Person" is missing, please define it and use
    it in persons array and logPerson function in order to fix
    all the TS errors.
    缺少“Person”类型，请定义它并在Person数组和logPerson函数中使用它，以修复所有的TS错误。
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

export type Person = unknown;

export const persons: User[] /* <- Person[] */ = [
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

export function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);

// In case if you are stuck:
// 万一你卡住了:
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#union-types
