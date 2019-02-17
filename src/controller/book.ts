import { Context } from 'koa';
import { createBook, getBooks  } from '../service/book';

export const get = async (ctx: Context) => {
  ctx.body = { books: await getBooks(), time: Date.now() };
};

export const post = async (ctx: Context) => {
  const payload = { ...ctx.request.body };
  ctx.body = { book: await createBook(payload) };
};

export const put = (ctx: Context) => {
  ctx.body = '[PUT] books';
};

export const del = (ctx: Context) => {
  ctx.body = '[DEL] books';
};
