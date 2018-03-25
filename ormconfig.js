module.exports = {
   "type": "mysql",
   "host": process.env.DATABASE_HOST,
   "port": +process.env.DATABASE_PORT,
   "username": process.env.MYSQL_DATABASE_USER,
   "password": process.env.MYSQL_ROOT_PASSWORD,
   "database": process.env.MYSQL_DATABASE,
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/entity/**/*.ts"
   ],
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ]
}
