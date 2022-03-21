const _dbConfig = {
  applicationName: 'emtask2',
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_SCHEMA,
  entities: ['dist/src/entities/*.entity.js'],
  synchronize: false,
  migrations: ['dist/src/db/migrations/*.js'],
  seeds: ['dist/src/db/seeds/*.js'],
  cli: {
    migrationsDir: 'src/db/migrations',
    seedsDir: 'src/db/seeds',
  },
};
module.exports = _dbConfig;
