/**
 * Created by lin on 2018/8/15.
 */
// 虚拟代理实现图片预加载
const myImage = (function() {
  const imgNode = document.createElement('img');
  document.body.appendChild(imgNode);
  return {
    setSrc(src) {
      imgNode.src = src;
    }
  };
})();

const proxyImage = (function() {
  const img = new Image();
  img.onload = function() {
    // http 图片加载完毕后才会执行
    myImage.setSrc(this.src);
  };
  return {
    setSrc(src) {
      myImage.setSrc('loading.jpg'); // 本地 loading 图片
      img.src = src;
    }
  };
})();

proxyImage.setSrc('http://loaded.jpg');

// 缓存代理实现乘积计算
const mult = function() {
  let a = 1;
  for (let i = 0, l; l = arguments[i++];) {
    a = a * l;
  }
  return a;
};

const proxyMult = (function() {
  const cache = {};
  return function() {
    const tag = Array.prototype.join.call(arguments, ',');
    if (cache[tag]) {
      return cache[tag];
    }
    cache[tag] = mult.apply(this, arguments);
    return cache[tag];
  };
})();

proxyMult(1, 2, 3, 4); // 24
