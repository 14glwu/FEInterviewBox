// 题目见https://www.nowcoder.com/discuss/89137
// 第一题答案
const data = [
  {
    parentId: 0,
    id: 1,
    value: '1'
  },
  {
    parentId: 3,
    id: 2,
    value: '2'
  },
  {
    parentId: 0,
    id: 3,
    value: '3'
  },
  {
    parentId: 1,
    id: 4,
    value: '4'
  },
  {
    parentId: 1,
    id: 5,
    value: '5'
  }
];
const Node = function(id, value) {
  this.id = id;
  this.value = value;
  this.children = [];
};
const solve = {
  value: [],
  edge: [],
  init(arr) {
    arr.forEach((e) => {
      // id-value键值对
      this.value[e.id] = e.value;
      // 父子关系
      this.edge[e.parentId] ? this.edge[e.parentId].push(e.id) : this.edge[e.parentId] = [e.id];
    });
    return this.makeTree(this.getRoot());
  },
  getRoot() {
    let root = 0;
    while (this.value[root] !== undefined) {
      root++;
    }
    return root;
  },
  makeTree(id) {
    const node = new Node(id, this.value[id]);
    if (this.edge[id]) {
      this.edge[id].forEach((e) => {
        node.children.push(this.makeTree(e));
      });
    }
    return node;
  }
};
solve.init(data);
console.log(solve.makeTree(0));

// 第二题答案
const arr = [func1, func2, func3];
function func1(ctx, next) {
  ctx.index++;
  next();
}
function func2(ctx, next) {
  setTimeout(function() {
    ctx.index++;
    next();
  });
}
function func3(ctx, next) {
  console.log(ctx.index);
}

compose(arr)({ index: 0 });
function compose(arr) {
  return function(ctx) {
    function next() {
      if (arr.length !== 0) {
        const func = arr.shift();
        func(ctx, next);
      }
    }
    if (arr.length !== 0) {
      const func = arr.shift();
      func(ctx, next);
    }
  };
}
