// new操作符一般经历以下四个步骤
// 1.创建一个新的对象；
// 2.将构造函数的作用域赋值给新对象（因此this就指向了这个新对象）
// 3.执行函数中的代码（为这个对象添加新的属性）
// 4.返回新的对象

// 实现一个new方法,这种是直接返回一个实例
function New() {
  let obj = new Object(),
    Constructor = [].shift.call(arguments); // 将第一个参数提出来
  obj.__proto__ = Constructor.prototype;
  let ret = Constructor.apply(obj, arguments); // arguments不包含构造函数了
  return typeof res === 'object' ? ret : obj;
}
// 实现一个new方法,这种是包装返回一个函数，还需要再执行下才能返回实例
function New2(f) {
  // 返回一个func
  return function() {
    const o = { __proto__: f.prototype };
    let res = f.apply(o, arguments); // 继承父类的属性
    return typeof res === 'object' ? ret : o; // 返回一个Object
  };
}

function foo(a) {
  this.a = a;
  this.color = ['123', '321'];
  return 123;
}
let test1 = new foo(2);
let test2 = new foo(2);
test1.color.push('test');
console.log(test1);
console.log(test2);

var newFoo = New2(foo);
let ins1 = newFoo(2);
let ins2 = newFoo(3);
ins1.color.push('test');
console.log(ins1);
console.log(ins2);
