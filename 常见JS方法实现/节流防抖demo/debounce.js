/**
 * Created by lin on 2018/8/28.
 */
let count = 1;
const container = document.getElementById('container');

function getUserAction() {
  container.innerHTML = count++;
}

container.onmousemove = throttle(getUserAction, 3000, { leading: true });
// container.onmousemove = debounce(getUserAction, 1000);

// 节流
function throttle(func, wait, options) {
  let timeout, context, args, result;
  let previous = 0;
  if (!options) options = {};
  console.log(options.leading === false);
  const later = function() {
    previous = options.leading === false ? 0 : new Date().getTime();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  const throttled = function() {
    const now = new Date().getTime();
    if (!previous && options.leading === false) previous = now;
    console.log(`now${now}`);
    console.log(`previous${previous}`);
    const remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      console.log(2222);
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
  throttled.cancel = function() {
    clearTimeout(timeout);
    previous = 0;
    timeout = null;
  };
  return throttled;
}
// 防抖
function debounce(func, wait, immediate) {
  let timeout, result;
  const debounced = function() {
    const context = this;
    const args = arguments;
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      // 如果已经执行过，不再执行
      const callNow = !timeout;
      timeout = setTimeout(function() {
        timeout = null;
      }, wait);
      if (callNow) result = func.apply(context, args);
    } else {
      timeout = setTimeout(function() {
        func.apply(context, args);
      }, wait);
    }
    return result;
  };
  debounced.cancel = function() {
    clearTimeout(timeout);
    timeout = null;
  };
  return debounced;
}
const div = document.createElement('div');
div.setAttribute('id', 'pdd');
