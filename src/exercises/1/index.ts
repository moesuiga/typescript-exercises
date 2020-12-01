/*

Welcome to:
欢迎来到：

    ................................................................
    .                                                              .
    .     ####################    ####################      E      .
    .     ####################    ####################      X      .
    .             ####            ####                      E      .
    .             ####            ####                      R      .
    .             ####            ####################      C      .
    .             ####                            ####      I      .
    .             ####                            ####      S      .
    .             ####            ####################      E      .
    .             ####            ####################      S      .
    .                                                              .
    ................................................................

    The goal: Let everyone play with many different TypeScript features
    and get an overview of TypeScript capabilities and principles.
    目标: 让每个人都能使用许多不同的TypeScript特性，
    并对TypeScript的功能和原理有一个大致的了解。

    Things to cover:
    覆盖面：

        1. Basic typing. 基本类型
        2. Refining types. 精炼类型。
        3. Union types. 联合类型
        4. Merged types. 合并类型
        5. Generics. 泛型
        6. Type declarations. 类型声明
        7. Module augmentation. 增加模块
        8. Advanced type mapping. 高级的类型映射

    Rules and principles:
    规则与原则：

        1. Avoid using "any" type at all costs.
           尽量避免使用 "any" 类型
        2. Difficulty quickly grows one exercise after another.
           一项接一项的练习难度迅速增加。
        3. Feel free to send pull-requests if you've came up
           with improvements!
           如果有什么改进，请随意发送 pull-requests!
        4. Provide feedback to the creator of these exercises.
           向这些练习的创建者提供反馈。
        5. Enjoy.
           享受您的TS之旅吧。

Brief UI guide:

    +--------------------------------------------------------------+
    | TypeScript exercises                                         |
    +--------------------------------------------------------------+
    | Exercises 1·2·3·4...   << Navigate through exercises >>      |
    +---------------+----------------------------------------------+
    | Files         | file.ts   << Filename and status >>          |
    +---------------+----------------------------------------------+
    | file.ts       | 1  import {x} from 'y';                      |
    | dir           | 2                                            |
    |   sub.ts      | 3                                            |
    |               |                                              |
    | << Current    |   << Currently selected file code editor >>  |
    | exercise file |                                              |
    | structure >>  +----------------------------------------------+
    |               |                                              |
    |               |   << Errors to fix in order to proceed >>    |
    |               |                                              |
    +---------------+----------------------------------------------+

Intro:
介绍（场景导入）：

    We are starting a small community of users. For performance
    reasons we have decided to store all users right in the code.
    This way we can provide our developers with more
    user-interaction opportunities. With user-related data, at least.
    All the GDPR-related issues we will solved some other day.
    This would be the base for our future experiments during
    these exercises.
    我们正在建立一个小型的用户社区。
    出于性能原因，我们决定在代码中存储所有用户。
    通过这种方式，我们可以为开发者提供更多的用户交互机会。 至少是与用户相关的数据。
    所有关于GDPR的问题，我们会在以后解决。
    这将是我们在这些练习中未来实验的基础。

Exercise:
练习（目标）：

    Given the data, define the interface "User" and use it accordingly.
    给定数据，定义接口“User”并相应地使用它。
*/

export type User = unknown;

export const users: unknown[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

export function logPerson(user: unknown) {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);


/* In case if you are stuck:
// 万一你卡住了:
// https://www.typescriptlang.org/docs/handbook/interfaces.html#introduction
*/
