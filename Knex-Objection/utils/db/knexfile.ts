import type { Knex } from "knex";
import {knexSnakeCaseMappers} from "objection";
import {DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE} from "../../config";

const knexConfig: { [key: string]: Knex.Config } = {
  development: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      port: 5555,
      user: 'postgres',
      password: 'postgres',
      database: 'ias',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations',
    },
    seeds: {
      directory: './seeds'
    },
    debug: true,
    ...knexSnakeCaseMappers,
  }
};

export default knexConfig;
