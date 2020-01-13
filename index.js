const Koa = require('koa');
const router= require('./server/router');
const config = require('./node_modules/@vue/cli-service/webpack.config.js');
const webpack = require('webpack');
const koaWebpack = require('koa-webpack');

const compiler = webpack(config);


const bootstrap = async () => {
    const middleware = await koaWebpack({ compiler });

    // Start Application
    const app = new Koa();

    app.use(middleware);

    // Add routes
    app.use(router.routes());

    // Start server
    const server = app.listen(3000, () => {
        console.log(process.uptime(), 'App listening on port 3000');
        if (process.send) process.send('online');
    });
}


bootstrap()