const koa = require('koa');
const koaLogger = require('./koa-logger');
const Router = require('koa-router');

const app = new koa();
const router = new Router();

router.get('/', (ctx, next) => {
    ctx.body = '首页';
});
router.get('/detail', (ctx, next) => {
    ctx.body = '详情页';
});
app
  .use(router.routes())
  .use(router.allowedMethods());

// app.use(async(ctx) => {
//     ctx.body = 'hello koa2';
// });

// app.use(koaLogger);

// function delay() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             resolve();
//         }, 2000);
//     });
// }


// app.use(async(ctx, next) => {
//     console.log(ctx);
//     if(ctx.request.url === '/') {
//         ctx.body = '首页';
//     } else if(ctx.request.url === '/detail') {
//         ctx.body = '详情页';
//     } else {
//         ctx.body = '<h3>404 not found!</h3>';
//     }
//     // ctx.body = '1';
//     // await next();
//     ctx.body += '2';
// })
// app.use(async(ctx, next) => {
//     ctx.body += '3';
//     await delay();
//     await next();
//     ctx.body += '4';
// })
// app.use(async(ctx, next) => {
//     ctx.body += '5';
//     await next();
//     ctx.body += '6';
// })

app.listen(3000);