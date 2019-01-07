/**
 * Created by lin on 2018/7/30.
 */
function curry(fn) {
  const args = Array.prototype.slice.call(arguments, 1);
  return function() {
    const innerArgs = Array.prototype.slice.call(arguments);
    const finalArgs = args.concat(innerArgs);
    return fn.apply(null, finalArgs);
  };
}
