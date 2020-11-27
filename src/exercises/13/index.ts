import * as dateWizard from 'date-wizard';
import './module-augmentations/date-wizard';

/*

Intro:
介绍（场景导入）：

    The next logical step for us is to provide more
    precise registration date for our users and admins.
    We've approximately made up dates for each user and
    admin and used a library called "date-wizard" in
    order to pretty-format the dates.
    下一步是为我们的用户和管理员提供更精确的注册日期。
    我们已经大致为每个用户和管理员创建了日期，
    并使用了一个名为 “date-wizard” 的库来美化日期格式。

    Unfortunately, type declarations which came with
    "date-wizard" library were incomplete.
    不幸的是，"date-wizard" 库附带的类型声明是不完整的。

    1. DateDetails interface is missing
       time related fields such as hours, minutes and
       seconds.
       DateDetails 接口缺少与时间相关的字段，如小时、分钟和秒。
    2. Function "pad" is exported but not declared.
       函数“pad”被导出但没有声明。

Exercise:
练习（目标）：

    Check date-wizard module implementation at:
    在以下文件中检查 date-wizard 模块实现：
    node_modules/date-wizard/index.js
    node_modules/date-wizard/index.d.ts

    Extend type declaration of that module in:
    在以下文件中扩展该模块的类型声明：
    module-augmentations/date-wizard/index.ts

*/

interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
    registered: Date;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
    registered: Date;
}

type Person = User | Admin;

const admins: Admin[] = [
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator', registered: new Date('2016-06-01T16:23:13') },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver', registered: new Date('2017-02-11T12:12:11') },
    { type: 'admin', name: 'Steve', age: 40, role: 'Steve', registered: new Date('2018-01-05T11:02:30') },
    { type: 'admin', name: 'Will Bruces', age: 30, role: 'Overseer', registered: new Date('2018-08-12T10:01:24') },
    { type: 'admin', name: 'Superwoman', age: 28, role: 'Customer support', registered: new Date('2019-03-25T07:51:05') }
];

const users: User[] = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep', registered: new Date('2016-02-15T09:25:13') },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut', registered: new Date('2016-03-23T12:47:03') },
    { type: 'user', name: 'Moses', age: 70, occupation: 'Desert guide', registered: new Date('2017-02-19T17:22:56') },
    { type: 'user', name: 'Superman', age: 28, occupation: 'Ordinary person', registered: new Date('2018-02-25T19:44:28') },
    { type: 'user', name: 'Inspector Gadget', age: 31, occupation: 'Undercover', registered: new Date('2019-03-25T09:29:12') }
];

const isAdmin = (person: Person): person is Admin => person.type === 'admin';
const isUser = (person: Person): person is User => person.type === 'user';

function logPerson(person: Person, index: number) {
    let additionalInformation: string = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    let registeredAt = dateWizard(person.registered, '{date}.{month}.{year} {hours}:{minutes}');
    let num = `#${dateWizard.pad(index + 1)}`;
    console.log(
        ` - ${num}: ${person.name}, ${person.age}, ${additionalInformation}, ${registeredAt}`
    );
}

export {
    dateWizard
};

console.log('All users:');

([] as Person[])
    .concat(users, admins)
    .forEach(logPerson);

console.log();

console.log('Early birds:');

([] as Person[])
    .concat(users, admins)
    .filter((person) => dateWizard.dateDetails(person.registered).hours < 10)
    .forEach(logPerson);

// In case if you are stuck:
// 万一你卡住了:
// https://www.typescriptlang.org/docs/handbook/modules.html#ambient-modules
// https://www.typescriptlang.org/docs/handbook/declaration-merging.html
