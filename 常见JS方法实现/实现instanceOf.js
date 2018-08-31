/**
 * Created by lin on 2018/8/27.
 */
function Instanceof(left, right) {
    // 获得类型的原型
    let prototype = right.prototype;
    // 获得对象的原型
    left = left.__proto__;
    // 判断对象的类型是否等于类型的原型
    while (true) {
        console.log(prototype);
        console.log(left);
        if (left === null)
            return false;
        if (prototype === left)
            return true;
        left = left.__proto__;
    }
}
function Student(name, age) {
    this.name = name;
    this.age = age;
}
function Teacher(name, age) {
    this.name = name;
    this.age = age;
}
let a = new Student("LIN",12);
console.log(Instanceof(a,Student));
console.log(Instanceof(a,Teacher));