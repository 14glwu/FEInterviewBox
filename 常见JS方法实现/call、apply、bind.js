/**
 * Created by lin on 2018/7/30.
 */
//如果是浏览器环境则需要把global换成window

//使用ES3实现call方法
Function.prototype.call = function () {
    var context = arguments[0] || global;//获取上下文，call的第一个参数
    var len = arguments.length;
    var hash = new Date().getTime(); //避免名字重复
    context[hash] = this; //将this缓存，this就是调用call方法的函数
    var result;
    if (len === 1) {
        result = context[hash]; //没有参数直接运行
    } else {
        var args = [];
        for (var i = 1; i < len; i++) {
            args.push('arguments[' + i + ']');
        }
        result = eval('context[hash](' + args + ')');//有参数则需要借助eval函数
    }
    delete context[hash];
    return result;
};

// 使用ES6写法实现call方法
Function.prototype.call = function (context, ...args) {
    var context = context || global;//获取上下文，call的第一个参数
    var hash = new Date().getTime(); //避免名字重复
    context[hash] = this; //将this缓存，this就是调用call方法的函数
    var result = context[hash](...args); //借助扩展运算符(...)运行函数
    delete context[hash];
    return result;
};

//使用ES3实现apply方法
Function.prototype.apply = function (context, arr) {
    var context = context || global;
    var len = arr.length;
    var hash = new Date().getTime();
    context[hash] = this;
    var result;
    if (!arr) {
        result = context[hash]();
    } else {
        var args = [];
        for (var i = 0; i < len; i++) {
            args.push('arr[' + i + ']');
        }
        result = eval('context[hash](' + args + ')');
    }
    delete context[hash];
    return result;
};

// 使用ES6写法实现apply方法
Function.prototype.apply = function (context, arr) {
    var context = context || global;//获取上下文，call的第一个参数
    var hash = new Date().getTime(); //避免名字重复
    context[hash] = this; //将this缓存，this就是调用call方法的函数
    var result = context[hash](...arr); //借助扩展运算符(...)运行函数
    delete context[hash];
    return result;
};

//ES3实现bind
Function.prototype.bind = function (context) {
    // 判断绑定bind方法的是不是函数
    if (typeof this !== "function") {
        throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }
    // 绑定函数赋值给self
    var self = this;
    // 获取bind2函数从第二个参数到最后一个参数
    var args = Array.prototype.slice.call(arguments, 1);
    // 调用bind方法返回的函数
    var fBound = function () {
        // 获取函数的参数
        var bindArgs = Array.prototype.slice.call(arguments);
        // 返回函数的执行结果
        // 判断函数是作为构造函数还是普通函数
        // 构造函数this instanceof fNOP返回true，将绑定函数的this指向该实例，可以让实例获得来自绑定函数的值。
        // 当作为普通函数时，this 指向 window，此时结果为 false，将绑定函数的 this 指向 context
        return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs))
    };
    // 创建空函数
    var fNOP = function () {
    };
    // fNOP函数的prototype为绑定函数的prototype
    fNOP.prototype = this.prototype;
    // 返回函数的prototype等于fNOP函数的实例实现继承
    fBound.prototype = new fNOP();
    // 以上三句相当于Object.create(this.prototype)
    // 返回函数
    return fBound;
};

//ES6实现bind
Function.prototype.bind = function(context, ...rest) {
    if (typeof this !== 'function') {
        throw new TypeError('invalid invoked!')
    }
    var self = this
    return function F(...args) {
        if (this instanceof F) {
            return new self(...rest, ...args)
        }
        return self.apply(context, rest.concat(args))
    }
};

//测试call方法
function add(c, d){
    return this.a + this.b + c + d
}
var o = {a:1, b:3}
add.call(o, 5, 7) // 16
//测试apply方法
function add(c, d){
    return this.a + this.b + c + d
}
var o = {a:1, b:3}
add.apply(o, [5, 7]) // 16
//测试bind方法
function foo(c, d) {
    this.b = 100;
    console.log(c)
    console.log(d)
    console.log(this.a)
}
var func = foo.bind({a: 1}, 'cc')
func('dd') //cc dd 1
new func('dd') //cc dd undefined