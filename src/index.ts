import 'reflect-metadata';
import { Container } from 'typedi';
import { createConnection, useContainer } from 'typeorm';

import * as debug from 'debug';
import * as Koa from 'koa';

import * as bodyparserMiddleware from 'koa-bodyparser';
import * as loggerMiddleware from 'koa-bunyan-logger';
import * as jsonMiddleware from 'koa-json';

import errorMiddleware from './middleware/error';
import requestMiddleware from './middleware/request';

import routeMiddleware from './route';

import conf from './conf';

const app = new Koa();
const d = debug('kickstarter:root');

// Register middleware
app.use(bodyparserMiddleware());
app.use(jsonMiddleware());
app.use(loggerMiddleware());
app.use(requestMiddleware());
app.use(errorMiddleware());

// Registers routes via middleware
app.use(routeMiddleware());

d('current environment: %s', conf.get('env'));
d('server started at port: %d', conf.get('port'));

useContainer(Container);
// using config from ormconfig.js
createConnection().then((connection: any) => {
  d('db connection established');
  app.listen(conf.get('port'));
}).catch((e: Error) => {
  d('db connection failed', e);
  process.exit(0);
});
