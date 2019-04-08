import { methodNotAllowed, notImplemented } from 'boom';
import * as compose from 'koa-compose';
import * as Router from 'koa-router';

import * as Ctrl from '../components/books/ctrl';

const router = new Router({
  prefix: '/books',
});

/**
 * @api {get} /books/ Get All books
 * @apiName GetBooks
 * @apiGroup Books
 *
 *
 * @apiSuccess {String} Books List of Books .
 */
router.get('/', Ctrl.get);

/**
 * @api {post} /books/ Create a new book
 * @apiName PostBooks
 * @apiGroup Books
 *
 *
 * @apiSuccess {String} Books Book .
 */
router.post('/', Ctrl.post);

/**
 * @api {put} /books/ Update a book
 * @apiName UpdateBook
 * @apiGroup Books
 *
 *
 * @apiSuccess {String} Books List of Books .
 */
router.put('/', Ctrl.put);

/**
 * @api {delete} /books/ Deletes a book
 * @apiName DeleteBook
 * @apiGroup Books
 *
 *
 * @apiSuccess {String} Books Deletes a Book.
 */
router.delete('/', Ctrl.del);

const routes = router.routes();
const allowedMethods = router.allowedMethods({
  methodNotAllowed: () => methodNotAllowed(),
  notImplemented: () => notImplemented(),
  throw: true,
});

export default () => compose([
  routes,
  allowedMethods,
]);
