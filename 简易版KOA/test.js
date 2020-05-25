const Koa = require('./koa');

const app = new Koa();

app.use(async (ctx, next) => {
  console.log('middleware 1 start');
  await next();
  console.log('middleware 1 end');
});

app.use(async (ctx, next) => {
  console.log('middleware 2 start');
  await next();
  console.log('middleware 2 end');
});

app.use(async (ctx, next) => {
  console.log('middleware 3 start');
  await next();
  console.log('middleware 3 end');
  ctx.body = 'hello, world';
});

app.listen(3000);
