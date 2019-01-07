/**
 * Created by lin on 2018/8/17.
 */
// 老接口
const oldCity = (function() {
  return [
    {
      name: 'hangzhou',
      id: 11
    },
    {
      name: 'jinhua',
      id: 12
    }
  ];
})();

// 新接口希望是下面形式
// {
//     hangzhou: 11,
//     jinhua: 12
// }

// 这时候就可采用适配者模式
const adaptor = function(oldCity) {
  const obj = {};
  for (const city of oldCity) {
    obj[city.name] = city.id;
  }
  return obj;
};

console.log(adaptor(oldCity));
