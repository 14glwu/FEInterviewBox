function thunkify(fn) {
  return function() {
    const args = new Array(arguments.length);
    const ctx = this;

    for (let i = 0; i < args.length; ++i) {
      args[i] = arguments[i];
    }

    return function(done) {
      let called;

      args.push(function() {
        if (called) return;
        called = true;
        done.apply(null, arguments);
      });

      try {
        fn.apply(ctx, args);
      } catch (err) {
        done(err);
      }
    };
  };
}

function f(callback) {
  setTimeout(function() {
    console.log('test');
  }, 1000);
  callback(111);
}
const ft = thunkify(f);
ft()(console.log);
