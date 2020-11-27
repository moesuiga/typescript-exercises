/*

Intro:
介绍（场景导入）：

    For some unknown reason most of our developers left
    the company. We need to actively hire now.
    In the media we've read that companies that invent
    and publish new technologies attract more potential
    candidates. We need to use this opportunity and
    invent and publish some npm packages. Following the
    new trend of functional programming in JS we
    decided to develop a functional utility library.
    This will put us on the bleading edge since we are
    pretty much sure no one else did anything similar.
    We also provided some jsdoc along with the
    functions, but it might sometimes be inaccurate.
    由于一些未知的原因，我们的大多数开发人员离开了公司。
    我们现在需要积极招聘。
    我们在媒体上看到，发明和发布新技术的公司吸引了更多潜在的候选人。
    我们需要利用这个机会，发明和发布一些npm包。
    遵循JS函数式编程的新趋势，我们决定开发一个函数式实用程序库。
    这将使我们处于领先地位，因为我们非常确定没有其他人做过类似的事情。
    我们还给一些函数提供了jsdoc，但有时可能不准确。

Exercise:
练习（目标）：

    Provide proper typing for the specified functions.
    为指定的函数提供正确的类型。

Bonus:
奖励：

    Could you please also refactor the code to reduce
    code duplication?
    You might need some excessive type casting to make
    it really short.
    您是否也可以重构代码，以减少代码重复?
    您可能需要进行一些过度的类型转换，以使它真正简短。

*/

/**
 * 2 arguments passed: returns a new array
 * which is a result of input being mapped using
 * the specified mapper.
 * 传入2个参数: 返回一个新的数组，它是使用指定映射器映射输入的结果。
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being mapped using original mapper.
 * 传入1个参数: 返回一个函数，它接受一个输入，
 * 并返回一个新的数组，这是输入被映射使用原始 mapper 的结果。
 *
 * 0 arguments passed: returns itself.
 * 没有参数：返回自身。
 *
 * @param {Function} mapper
 * @param {Array} input
 * @return {Array | Function}
 */
export function map(mapper, input) {
    if (arguments.length === 0) {
        return map;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.map(mapper);
        };
    }
    return input.map(mapper);
}

/**
 * 2 arguments passed: returns a new array
 * which is a result of input being filtered using
 * the specified filter function.
 * 传入2个参数: 返回一个新的数组，
 * 该数组是使用指定的筛选函数筛选输入的结果。
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being filtered using original filter
 * function.
 * 传入1个参数: 返回一个函数，该函数接受输入并返回一个新的数组，
 * 该数组是使用原始过滤器函数过滤输入的结果。
 *
 * 0 arguments passed: returns itself.
 * 没有参数：返回自身。
 *
 * @param {Function} filterer
 * @param {Array} input
 * @return {Array | Function}
 */
export function filter(filterer, input) {
    if (arguments.length === 0) {
        return map;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.filter(filterer);
        };
    }
    return input.filter(filterer);
}

/**
 * 3 arguments passed: reduces input array it using the
 * specified reducer and initial value and returns
 * the result.
 * 传入3个参数: 使用指定的reducer和初始值来减少输入数组并返回结果。
 *
 * 2 arguments passed: returns a function which accepts
 * input array and reduces it using previously specified
 * reducer and initial value and returns the result.
 * 传入2个参数: 返回一个函数，该函数接受输入数组
 * 并使用先前指定的reducer和初值对其进行reduce并返回结果。
 *
 * 1 argument passed: returns a function which:
 *   * when 2 arguments is passed to the subfunction, it
 *     reduces the input array using specified initial
 *     value and previously specified reducer and returns
 *     the result.
 *   * when 1 argument is passed to the subfunction, it
 *     returns a function which expects the input array
 *     and reduces the specified input array using
 *     previously specified reducer and inital value.
 *   * when 0 argument is passed to the subfunction, it
 *     returns itself.
 * 传入1个参数: 返回一个函数
 *   * 当2个参数被传递给子函数时，
 *     它使用指定的初始值和之前指定的reducer来减少输入数组并返回结果。
 *   * 当向子函数传递1个参数时，它返回一个函数，
 *     该函数期望得到输入数组，并使用先前指定的reducer和初始值来减少指定的输入数组。
 *   * 当没有参数传递给子函数时，它返回自己。
 *
 * 0 arguments passed: returns itself.
 * 没有参数：返回自身。
 *
 * @param {Function} reducer
 * @param {*} initialValue
 * @param {Array} input
 * @return {* | Function}
 */
export function reduce(reducer, initialValue, input) {
    if (arguments.length === 0) {
        return reduce;
    }
    if (arguments.length === 1) {
        return function subFunction(subInitialValue, subInput) {
            if (arguments.length === 0) {
                return subFunction;
            }
            if (arguments.length === 1) {
                return function subSubFunction(subSubInput) {
                    if (arguments.length === 0) {
                        return subSubFunction;
                    }
                    return input.reduce(reducer, subInitialValue);
                };
            }
        }
    }
    if (arguments.length === 2) {
        return function subFunction(subInput) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return input.reduce(reducer, initialValue, subInput);
        };
    }
    return input.reduce(reducer, initialValue);
}

/**
 * 2 arguments passed: returns sum of a and b.
 * 传入2个参数: 返回a与b的和。
 *
 * 1 argument passed: returns a function which expects
 * b and returns sum of a and b.
 * 传入1个参数: 返回一个期望参数为b的函数，并返回a与b的和。
 *
 * 0 arguments passed: returns itself.
 * 没有参数：返回自身。
 *
 * @param {Number} a
 * @param {Number} b
 * @return {Number | Function}
 */
export function add(a, b) {
    if (arguments.length === 0) {
        return add;
    }
    if (arguments.length === 1) {
        return function subFunction(subB) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return a + subB;
        };
    }
    return a + b;
}

/**
 * 2 arguments passed: subtracts b from a and
 * returns the result.
 * 传入2个参数: 从a中减去b并返回结果。
 *
 * 1 argument passed: returns a function which expects
 * b and subtracts b from a and returns the result.
 * 传入1个参数: 返回一个函数，该函数期望得到b并从a中减去b并返回结果。
 *
 * 0 arguments passed: returns itself.
 * 没有参数：返回自身。
 *
 * @param {Number} a
 * @param {Number} b
 * @return {Number | Function}
 */
export function subtract(a, b) {
    if (arguments.length === 0) {
        return add;
    }
    if (arguments.length === 1) {
        return function subFunction(subB) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return a - subB;
        };
    }
    return a - b;
}

/**
 * 2 arguments passed: returns value of property
 * propName of the specified object.
 * 传入2个参数: 返回指定对象的属性propName的值。
 *
 * 1 argument passed: returns a function which expects
 * propName and returns value of property propName
 * of the specified object.
 * 传入1个参数: 返回一个函数，该函数需要propName并返回指定对象的属性propName的值。
 *
 * 0 arguments passed: returns itself.
 * 没有参数：返回自身。
 *
 * @param {Object} obj
 * @param {String} propName
 * @return {* | Function}
 */
export function prop(obj, propName) {
    if (arguments.length === 0) {
        return prop;
    }
    if (arguments.length === 1) {
        return function subFunction(subPropName) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return obj[subPropName];
        };
    }
    return obj[propName];
}

/**
 * >0 arguments passed: expects each argument to be
 * a function. Returns a function which accepts the
 * same arguments as the first function. Passes these
 * arguments to the first function, the result of
 * the first function passes to the second function,
 * the result of the second function to the third
 * function... and so on. Returns the result of the
 * last function execution.
 * 传入超过0个参数: 期望每个参数都是一个函数。
 * 返回一个函数，该函数接受与第一个函数相同的参数。
 * 将这些参数传递给第一个函数，第一个函数的结果传递给第二个函数，
 * 第二个函数的结果传递给第三个函数…等等。
 * 返回最后一次函数执行的结果。
 *
 * 0 arguments passed: returns itself.
 * 没有参数：返回自身。
 *
 * TODO TypeScript
 *   * Should properly handle at least 5 arguments.
 *   * Should also make sure argument of the next
 *     function matches the return type of the previous
 *     function.
 *   * 应该正确处理至少5个参数。
 *   * 还应该确保下一个函数的参数与前一个函数的返回类型匹配。
 *
 * @param {Function[]} functions
 * @return {*}
 */
export function pipe(...functions) {
    if (arguments.length === 0) {
        return pipe;
    }
    return function subFunction() {
        let nextArguments = Array.from(arguments);
        let result;
        for (const func of functions) {
            result = func(...nextArguments);
            nextArguments = [result];
        }
        return result;
    };
}
