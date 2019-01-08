import * as Koa from 'koa';
import * as bodyparserMiddleware from 'koa-bodyparser';
import * as loggerMiddleware from 'koa-bunyan-logger';
import * as jsonMiddleware from 'koa-json';
import * as dotenv from 'dotenv';

dotenv.config();
import * as debug from 'debug';
import errorMiddleware from './middleware/error';
import requestMiddleware from './middleware/request';
import responseMiddleware from './middleware/response';

import routeMiddleware from './route';

import conf from './conf';

const app = new Koa();
const d = debug('pizzaApi:root');
// Register middleware
app.use(bodyparserMiddleware());
app.use(jsonMiddleware());
app.use(loggerMiddleware());
app.use(requestMiddleware());
app.use(errorMiddleware());

// Registers routes via middleware
app.use(routeMiddleware());

// response middleware
app.use(responseMiddleware());

app.listen(conf.get('port'), () => {
  d('current environment: %s', conf.get('env'));
  d('server started at port: %d', conf.get('port'));
});
