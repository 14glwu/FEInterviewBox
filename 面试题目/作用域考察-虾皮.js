var res = [];
a = 3;
var total = 0;
var i = 0;
function foo(a) {
  for (; i < 3; i++) {
    res[i] = function() {
      total += i * a;
      alert(total);
    };
  }
}
foo(1);
res[0]();
res[1]();
res[2]();
