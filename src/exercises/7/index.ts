/*

Intro:
介绍（场景导入）：

    Filtering was completely removed from the project.
    It turned out that this feature was just not needed
    for the end-user and we spent a lot of time just because
    our office manager told us to do so. Next time we should
    instead listen to the product management.
    从项目中完全删除了过滤。
    事实证明，最终用户并不需要这个特性，
    我们花了很多时间，只是因为我们的办公室经理告诉我们这样做。
    下次我们应该听产品管理。

    Anyway we have a new plan. CEO's friend Nick told us
    that if we randomly swap user names from time to time
    in the community, it would be very funny and the project
    would definitely succeed!
    不管怎样，我们有了一个新计划。CEO的朋友Nick告诉我们，
    如果我们在社区中时不时地交换用户名，那将会非常有趣，而且这个项目一定会成功!

Exercise:
练习（目标）：

    Implement swap which receives 2 persons and returns them in
    the reverse order. The function itself is already
    there, actually. We just need to provide it with proper types.
    Also this function shouldn't necessarily be limited to just
    Person types, lets type it so that it works with any two types
    specified.
    实现交换，接收2个人并以相反的顺序返回他们。
    函数本身已经在那里了。我们只需要为它提供合适的类型。
    此外，这个函数不应该只局限于Person类型，
    允许键入它，以便它可以与指定的任何两种类型一起工作。

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

function logUser(user: User) {
    const pos = users.indexOf(user) + 1;
    console.log(` - #${pos} User: ${user.name}, ${user.age}, ${user.occupation}`);
}

function logAdmin(admin: Admin) {
    const pos = admins.indexOf(admin) + 1;
    console.log(` - #${pos} Admin: ${admin.name}, ${admin.age}, ${admin.role}`);
}

const admins: Admin[] = [
    {
        type: 'admin',
        name: 'Will Bruces',
        age: 30,
        role: 'Overseer'
    },
    {
        type: 'admin',
        name: 'Steve',
        age: 40,
        role: 'Steve'
    }
];

const users: User[] = [
    {
        type: 'user',
        name: 'Moses',
        age: 70,
        occupation: 'Desert guide'
    },
    {
        type: 'user',
        name: 'Superman',
        age: 28,
        occupation: 'Ordinary person'
    }
];

export function swap(v1, v2) {
    return [v2, v1];
}

function test1() {
    console.log('test1:');
    const [secondUser, firstAdmin] = swap(admins[0], users[1]);
    logUser(secondUser);
    logAdmin(firstAdmin);
}

function test2() {
    console.log('test2:');
    const [secondAdmin, firstUser] = swap(users[0], admins[1]);
    logAdmin(secondAdmin);
    logUser(firstUser);
}

function test3() {
    console.log('test3:');
    const [secondUser, firstUser] = swap(users[0], users[1]);
    logUser(secondUser);
    logUser(firstUser);
}

function test4() {
    console.log('test4:');
    const [firstAdmin, secondAdmin] = swap(admins[1], admins[0]);
    logAdmin(firstAdmin);
    logAdmin(secondAdmin);
}

function test5() {
    console.log('test5:');
    const [stringValue, numericValue] = swap(123, 'Hello World');
    console.log(` - String: ${stringValue}`);
    console.log(` - Numeric: ${numericValue}`);
}

[test1, test2, test3, test4, test5].forEach((test) => test());

// In case if you are stuck:
// 万一你卡住了:
// https://www.typescriptlang.org/docs/handbook/basic-types.html#tuple
// https://www.typescriptlang.org/docs/handbook/generics.html
