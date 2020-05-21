var multiply = function(num1, num2) {
  if (num1 == '0' || num2 == '0') return '0';
  let l1 = num1.length,
    l2 = num2.length;
  let res = new Array(l1 + l2 - 1).fill(0);
  console.log(res);
  for (let i = 0; i < l2; i++) {
    for (let j = 0; j < l1; j++) {
      res[i + j] += +num2[i] * +num1[j];
    }
  }
  console.log(res);
  let len = res.length;
  let str = '',
    num = 0;
  while (len--) {
    num += res[len];
    str = (num % 10) + str;
    num = (num / 10) | 0;
  }
  console.log(num);
  return num > 0 ? num + str : str;
};

var multiply2 = function(num1, num2) {
  if (num1 == '0' || num2 == '0') return '0';
  let l1 = num1.length,
    l2 = num2.length;
  let res = new Array(l1 + l2).fill(0);
  for (let i = l2 - 1; i >= 0; i--) {
    for (let j = l1 - 1; j >= 0; j--) {
      let sum = res[i + j + 1] + +num2[i] * +num1[j];
      res[i + j + 1] = sum % 10;
      res[i + j] += (sum / 10) | 0;
    }
  }
  if (res[0] === 0) {
    res.shift();
  }
  return res.join('');
};
console.log(multiply2('123', '45'));
