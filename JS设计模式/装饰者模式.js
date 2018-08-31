/**
 * Created by lin on 2018/8/16.
 */
let wear = function() {
    console.log('穿上第一件衣服')
}

const _wear1 = wear

wear = function() {
    _wear1()
    console.log('穿上第二件衣服')
}

const _wear2 = wear

wear = function() {
    _wear2()
    console.log('穿上第三件衣服')
}

wear()

// 穿上第一件衣服
// 穿上第二件衣服
// 穿上第三件衣服
// 这种方式有以下缺点：1：临时变量会变得越来越多；2：this 指向有时会出错

//AOP装饰函数
// 前置代码
Function.prototype.before = function(fn) {
    const self = this
    return function() {
        fn.apply(this, arguments)
        return self.apply(this, arguments)
    }
}

// 后置代码
Function.prototype.after = function(fn) {
    const self = this
    return function() {
        self.apply(this, arguments)
        return fn.apply(this, arguments)
    }
}

const wear1 = function() {
    console.log('穿上第一件衣服')
}

const wear2 = function() {
    console.log('穿上第二件衣服')
}

const wear3 = function() {
    console.log('穿上第三件衣服')
}

const wear = wear1.after(wear2).after(wear3)
wear()

// 穿上第一件衣服
// 穿上第二件衣服
// 穿上第三件衣服

//但这样子有时会污染原生函数，可以做点通变
const after = function(fn, afterFn) {
    return function() {
        fn.apply(this, arguments)
        afterFn.apply(this, arguments)
    }
}

const wear = after(after(wear1, wear2), wear3)
wear()