let obj = {
    a: {
      b: {
        c: {
          d: 1
        }
      }
    },
    aa: 2,
    c: [1, 2]
  };
  
  function flatten(obj, prefix = '', resObj = {}) {
    for (let key in obj) {
      const value = obj[key];
      if (typeof value === 'object' && !Array.isArray(value)) {
        let tmpKey = prefix + key + '.';
        flatten(value, tmpKey, resObj);
      } else if (typeof value === 'object' && Array.isArray(value)) {
        value.reduce((acc, cur, idx) => {
          let tmpKey = `${prefix}${key}[${idx}]`;
          acc[tmpKey] = cur;
          return acc;
        }, resObj);
      } else {
        let tmpKey = prefix + key;
        resObj[tmpKey] = value;
      }
    }
    return resObj;
  }
  console.log(flatten(obj));
  