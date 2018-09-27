const testData = {
    a_v: 123,
    a_y: [1, 2, 3, 4],
    a_d: {
        s: 2,
        s_3: 3
    },
    a_f: [{
        a_g: 5
    }],
    a_a_d: 1
}
// a_d => aD

/**
 * @param {Object | Array} data
 * @param {Boolean} isDeep
 * @return {Object | Array}
 */
//要求实现的函数，可以转化属性名，如a_d => aD时
function underscoreToHump(data, isDeep=true) {
    if(data == null || data == undefined){
        return ;
    }
    let newObj = {};
    if(typeof data !== 'object'){
        return data;
    }else{
        if(!Array.isArray(data) ){
            for(let key in data){
                let keyStr = key.toString();
                if(keyStr.indexOf("_")>-1){
                    //转换属性名
                    let tmp = keyStr.split("_");
                    let first = tmp[0];
                    tmp = tmp.map(i => i.toUpperCase());
                    tmp[0] = first;
                    let newKey = tmp.join("");
                    //赋值
                    newObj[newKey] = underscoreToHump(data[key], isDeep);
                }else{
                    //赋值
                    newObj[key] = underscoreToHump(data[key], isDeep);
                }
            }
        }else{
            let len = data.length;
            for(let i = 0; i< len; i++){
                data[i] = underscoreToHump(data[i], isDeep);
            }
            return data;
        }
    }
    return newObj;
}


const result = underscoreToHump(testData)
console.log(result)