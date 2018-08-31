/**
 *
 * @author wuguanglin
 * @create 2018/7/17
 * @description 描述
 */
function timeout(ms) {
    return new Promise(function(resolve,reject){
        setTimeout(resolve,ms);
    })
}
const ajax1 = () => timeout(2000).then(() => {
    console.log('1');
    return 1;
});

const ajax2 = () => timeout(1000).then(() => {
    console.log('2');
    return 2;
});

const ajax3 = () => timeout(2000).then(() => {
    console.log('3');
    return 3;
});

// const mergePromise = ajaxArray => {
//     // 在这里实现你的代码
//     return new Promise((resolve, reject) => { //返回一个新的Promise
//         let arr = []; //定义一个空数组存放结果
//         let i = 0;
//         function handleData(index, data) { //处理数据函数
//             arr[index] = data;
//             i++;
//             if (i === ajaxArray.length) { //当i等于传递的数组的长度时
//                 resolve(arr); //执行resolve,并将结果放入
//             }
//         }
//         function handlePromise(i){
//             if(i >= ajaxArray.length)
//                 return;
//             ajaxArray[i]().then((data) => {
//                 handleData(i, data); //将结果和索引传入handleData函数
//                 handlePromise(i+1);
//             }, reject)
//         }
//         handlePromise(0);
//         // for (let i = 0; i < ajaxArray.length; i++) { //循环遍历数组
//         // ajaxArray[i]().then((data) => {
//         //     handleData(i, data); //将结果和索引传入handleData函数
//         // }, reject)
//         // }
//     })
// };
const mergePromise = ajaxArray => new Promise((resolve) => {
    let len = ajaxArray.length;
    let data = []
    async function fn(ajaxArray) {
        for (let i = 0; i < len; i++) {
            let item = await ajaxArray[i]();
            data.push(item)
        }
        resolve(data)
    }
    fn(ajaxArray);
})
mergePromise([ajax1, ajax2, ajax3]).then(data => {
    console.log('done');
    console.log(data); // data 为 [1, 2, 3]
});

// 分别输出
// 1
// 2
// 3
// done
//     [1, 2, 3]