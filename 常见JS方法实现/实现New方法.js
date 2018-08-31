//new操作符一般经历以下四个步骤
//1.创建一个新的对象；
//2.将构造函数的作用域赋值给新对象（因此this就指向了这个新对象）
//3.执行函数中的代码（为这个对象添加新的属性）
//4.返回新的对象

//实现一个new方法
function New(f) {
    //返回一个func
    return function () {
        var o = {"__proto__": f.prototype};
        f.apply(o, arguments);//继承父类的属性
        return o; //返回一个Object
    }
}
