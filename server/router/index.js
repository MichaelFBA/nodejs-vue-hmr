const Router = require('koa-router');

const router = new Router();

router
    .get('/', (ctx) => {
        ctx.type = 'text/html; charset=utf-8';
        ctx.body = 'Hello World'
    })

module.exports = router;