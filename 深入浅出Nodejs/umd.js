(function(name, definition) {
  var hasDefine = typeof define === 'function',
    hasExports = typeof module !== undefined && module.exports;
  if (hasDefine) {
    // AMD环境或者CMD环境
    define(definition);
  } else if (hasExports) {
    // 定义为普通node模块
    module.exports = definition();
  } else {
    this[name] = definition();
  }
})('hello', function() {
  var hello = function() {};
  return hello;
});
