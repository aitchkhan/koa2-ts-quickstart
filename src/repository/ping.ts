import {connection} from './knex';

export const pingDatabase = async () => {
  return connection.raw(`select 'hello from database' as response`);
};
