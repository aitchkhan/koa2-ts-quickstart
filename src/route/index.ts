import * as compose from 'koa-compose';
import * as Router from 'koa-router';
// Import all routes
import ping from './ping';

export default () => compose([
  ping(),
]);
