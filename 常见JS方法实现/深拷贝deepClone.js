/* eslint no-new-func: "off",no-prototype-builtins: "off" */
// 可以拷贝普通函数、Date、RegExp和传统对象
// 没有拷贝原型、没有解决循环引用
function deepClone(obj) {
  if (typeof obj === 'function') {
    const str = obj.toString();
    /^function\s*\w*\s*\((.*)\)\s*\{([\s\S]*)\}$/.exec(str); // 匹配函数体
    const args = RegExp.$1.split(',').map((item) => item.trim());
    return new Function(...args, RegExp.$2);
  }
  if (!obj || typeof obj !== 'object') return obj;
  if (Object.prototype.toString.call(obj) === '[object Date]')
    return new Date(obj); /*  */
  if (Object.prototype.toString.call(obj) === '[object RegExp]')
    return new RegExp(obj);
  const cloneObj = Array.isArray(obj) ? [] : {};
  for (const i in obj) {
    if (obj.hasOwnProperty(i)) {
      // 保证只遍历实例属性
      cloneObj[i] = deepClone(obj[i]);
    }
  }
  return cloneObj;
}
const obj = {
  name: 'xm',
  birth: new Date(),
  desc: null,
  reg: /^123$/,
  ss: [1, 2, 3],
  fn: function test(num1, num2) {
    console.log(num1, num2);
  }
};

const obj2 = deepClone(obj);
console.log(obj, obj2);
obj.fn(1, 2);
obj2.fn(1, 2);
// 如果你所需拷贝的对象含有内置类型并且不包含函数，可以使用 MessageChannel

// 普通的深拷贝可以使用
// const obj3 = JSON.parse(JSON.stringify(obj));
// console.log(obj3);
// 但是该方法有局限
// 1.会忽略 undefined
// 2.不能序列化函数、复杂对象
// 3.不能解决循环引用的对象

// 浅拷贝，可以通过Object.assign()来解决
// const obj4 = Object.assign({}, obj);
// console.log(obj4);
