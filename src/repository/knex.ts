import * as knex from 'knex';

export const connection = knex({
  client: 'mysql',
  connection: {
    host : process.env.DATABASE_HOST,
    user : process.env.MYSQL_DATABASE_USER,
    password : process.env.MYSQL_ROOT_PASSWORD,
    database : process.env.MYSQL_DATABASE
  }
});
