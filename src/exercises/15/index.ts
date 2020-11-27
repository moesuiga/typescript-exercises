/*

Intro:
介绍（场景导入）：

    Our attempt to Open Source didn't work quite as
    expected. It turned out there were already many
    existing functional JS libraries.
    我们的开源尝试并没有像预期的那样成功。
    事实证明，已有许多功能性JS库存在。

    All the remaining developers left the company as
    well. It seems that they are joining a very
    ambitious startup which re-invented a juicer and
    raised millions of dollars.
    Too bad we cannot compete with this kind of
    financing even though we believe our idea is
    great.
    所有剩下的开发人员也都离开了公司。
    他们似乎加入了一个非常有野心的创业公司，该公司重新发明了榨汁机，
    并筹集了数百万美元。可惜的是，我们无法与这种融资竞争，
    尽管我们相信我们的想法是伟大的。

    It's time to shine for the last time and publish
    our new invention: object-constructor as our CTO
    named it. A small library which helps
    manipulating an object.
    现在是最后一次发布我们的新发明: object-constructor，作为CTO的命名。
    帮助操纵对象的小型库。

Exercise:
练习（目标）：

    Here is a library which helps manipulating objects.
    We tried to write type annotations and we failed.
    Please help!
    这是一个帮助操作对象的库。
    我们试图编写类型注释，但失败了。
    请帮助!

*/

Object
export class ObjectManipulator {

    constructor(protected obj) {}

    public set(key, value) {
        return new ObjectManipulator({...this.obj, [key]: value});
    }

    public get(key) {
        return this.obj[key];
    }

    public delete(key) {
        const newObj = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject() {
        return this.obj;
    }
}
