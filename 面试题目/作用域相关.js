/**
 * Created by lin on 2018/8/25.
 */
const length = 10;
function fn() {
  console.log(this.length);
}
const obj = {
  length: 5,
  method(fn) {
    fn(); // 这里相当于全局时候调用，this指向window
    console.log(this.length); // 这里的this要看谁调用，还不确定
    arguments[0](); // 这里this指向的是argument类数组对象，相当于arguments[0] = fn;
    // arguments[0]()相当于arguments.0(),也就是arguments调用的，this指向arguments
  }
};
const anothodObj = {
  length: 100
};
anothodObj.anotherMethod = obj.method;
obj.method(fn, 1);
anothodObj.anotherMethod(fn, 1);
