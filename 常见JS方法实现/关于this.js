/**
 * Created by lin on 2018/8/27.
 */
function foo() {
  console.log(this.a);
}
const a = 1;
foo();

const obj = {
  a: 2,
  foo
};
obj.foo();

// 以上两者情况 `this` 只依赖于调用函数前的对象，优先级是第二个情况大于第一个情况

// 以下情况是优先级最高的，`this` 只会绑定在 `c` 上，不会被任何方式修改 `this` 指向
const c = new foo();
c.a = 3;
console.log(c.a);

// 还有种就是利用 call，apply，bind 改变 this，这个优先级仅次于 new

// 箭头函数没有this值，this为声明处的this值。
function test() {
  return () => {
    return () => {
      console.log(this);
    };
  };
}
console.log(test()()());
