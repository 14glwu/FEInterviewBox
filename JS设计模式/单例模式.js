const Singleton = function(name) {
  this.name = name;
  this.instance = null;
};

singleton.prototype.getName = function() {
  console.log(this.name);
};

singleton.getInstance = function(name) {
  if (!this.instance) {
    // 关键语句
    this.instance = new Singleton(name);
  }
  return this.instance;
};

// test
const a = singleton.getInstance('a'); // 通过 getInstance 来获取实例
const b = singleton.getInstance('b');
console.log(a === b);

// 弹框层的实践
const createLoginLayer = function() {
  const myDiv = document.createElement('div');
  myDiv.innerHTML = '登入浮框';
  // myDiv.style.display = 'none'
  document.body.appendChild(myDiv);
  return myDiv;
};

// 使单例模式和创建弹框代码解耦
const getSingle = function(fn) {
  let result = null;
  return function() {
    if (!result) {
      result = fn.apply(this, arguments);
    }
    return result;
  };
};

const createSingleLoginLayer = getSingle(createLoginLayer);

document.getElementById('loginBtn').onclick = function() {
  createSingleLoginLayer();
};
