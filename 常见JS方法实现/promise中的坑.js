/**
 * Created by lin on 2018/8/16.
 */
// promise.then(...).catch(...);与promise.then(..., ...);并不等价，
// 尤其注意当promise.then(...).catch(...);中的then会抛异常的情况下。
const fn = () => {
    throw 2;
}

//promise.then(...).catch(...);
Promise.resolve(1)         //{ [[PromiseStatus]]:"resolved", [[PromiseValue]]:1 }
    .then(v => {           //1
        fn();              //抛异常了，then返回一个rejected的promise
        return 3;          //后面不执行了
    })                     //{ [[PromiseStatus]]:"rejected", [[PromiseValue]]:2 }
    .catch(v => {          //v是throw的值2
        console.log(v);    //2
        return 4;          //catch返回一个resolved且值为4的promise
    });                    //{ [[PromiseStatus]]:"resolved", [[PromiseValue]]:4 }
//程序最后正常结束

//promise.then(..., ...);
Promise.resolve(1)         //{ [[PromiseStatus]]:"resolved", [[PromiseValue]]:1 }
    .then(
        v => {             //1
            fn();          //抛异常了，then返回一个rejected的promise
            return 3;      //后面不执行了
        },
        v => {             //这里只有then之前是rejected才执行
            console.log(v);//不执行
            return 4;      //不执行
        }
    );                     //{ [[PromiseStatus]]:"rejected", [[PromiseValue]]:2 }
//程序最后抛异常：Uncaught (in promise) 2