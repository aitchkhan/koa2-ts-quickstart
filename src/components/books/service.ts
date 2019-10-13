import { Book } from './entity';
import { findAll, save } from './repository';

export const getBooks = () => {
  return findAll();
};

export const createBook = (payload: any) => {
  const book = new Book();

  book.name = payload.name;
  book.isPublished = payload.isPublished;
  book.copiesSold = payload.copiesSold;
  return save(book);
};
