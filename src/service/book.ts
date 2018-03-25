import { Container } from 'typedi';
import { Book } from '../entity/book';
import { BookRepository } from '../repository/book';

export const getBooks = () => {
  const repo = Container.get(BookRepository);

  return repo.findAll();
};

export const createBook = (payload: any) => {
  const book = new Book();

  const repo = Container.get(BookRepository);
  book.name = payload.name;
  book.isPublished = payload.isPublished;
  book.copiesSold = payload.copiesSold;
  return repo.save(book);
};
