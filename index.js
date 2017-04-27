const
  serve = require('koa-static'),
  Koa = require('koa'),
  app = new Koa();

const port = process.env.PORT || 9001

app.use(serve(__dirname + '/app'));

app.listen(port);
console.log('server started');