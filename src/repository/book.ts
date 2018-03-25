import { Service } from 'typedi';
import { EntityManager, Repository } from 'typeorm';
import {  OrmManager, OrmRepository } from 'typeorm-typedi-extensions';

import { Book } from '../entity/book';

@Service()
export class BookRepository {
  @OrmManager()
  private entityManager: EntityManager;

  constructor(@OrmRepository(Book) private ormRepository: Repository<Book>) { }

  public save(book: Book) {
    return this.ormRepository.save(book);
  }

  public findAll() {
    return this.ormRepository.find();
  }
}
