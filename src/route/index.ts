import * as compose from 'koa-compose';
import * as Router from 'koa-router';
// Import all routes
import book from './book';

export default () => compose([
  book(),
]);
