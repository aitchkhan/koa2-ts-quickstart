import { getRepository } from 'typeorm';

import { Book } from './entity';

export const save = async (payload: Book) => {
  const repo = getRepository(Book);
  return repo.save(payload);
};

export const findAll = async () => {
  const repo = getRepository(Book);
  return repo.find();
};
