const
  serve = require('koa-static'),
  Koa = require('koa'),
  app = new Koa();

app.use(serve(__dirname + '/app'));

app.listen(9001);
console.log('server started');