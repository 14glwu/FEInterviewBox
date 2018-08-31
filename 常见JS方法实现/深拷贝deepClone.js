//可以拷贝函数、Date、RegExp和传统对象
//没有拷贝原型、没有解决循环引用
function deepClone(obj){
    if(Object.prototype.toString.call(obj)==="[object Function]"){
        let str=obj.toString();
        /^function\s*\w*\s*\(\s*\)\s*\{(.*)/.test(str);
        let str1=RegExp.$1.slice(0,-1);
        return new Function(str1);
    }
    if(!obj||typeof obj!=="object")
        return obj;
    if(Object.prototype.toString.call(obj)==="[object Date]")
        return new Date(obj);
    if(Object.prototype.toString.call(obj)==="[object RegExp]")
        return new RegExp(obj);
    let cloneObj=Array.isArray(obj)?[]:{};
    for(let i in obj){
        if(obj.hasOwnProperty(i)){//保证只遍历实例属性
            cloneObj[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i];
        }
    }
    return cloneObj;
}

// 如果你所需拷贝的对象含有内置类型并且不包含函数，可以使用 MessageChannel

// 普通的深拷贝可以使用
JSON.parse(JSON.stringify(object))
// 但是该方法有局限
// 1.会忽略 undefined
// 2.不能序列化函数
// 3.不能解决循环引用的对象

// 浅拷贝，可以通过Object.assign()来解决
let a = {
    age: 1
}
let b = Object.assign({}, a)
a.age = 2
console.log(b.age) // 1