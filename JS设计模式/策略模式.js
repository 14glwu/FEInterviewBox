/**
 * Created by lin on 2018/8/15.
 */
const strategy = {
    'S': function(salary) {
        return salary * 4
    },
    'A': function(salary) {
        return salary * 3
    },
    'B': function(salary) {
        return salary * 2
    }
}

const calculateBonus = function(level, salary) {
    return strategy[level](salary)
}

calculateBonus('A', 10000) // 30000




//策略模式的使用常常隐藏在高阶函数中
const S = function(salary) {
    return salary * 4
}

const A = function(salary) {
    return salary * 3
}

const B = function(salary) {
    return salary * 2
}

const calculateBonus = function(func, salary) {
    return func(salary)
}

calculateBonus(A, 10000) // 30000