// Update with your config settings.
import {config} from 'dotenv';
import {Knex} from "knex";

config();
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export const knexfile: any = {

  development: {
    client: 'postgresql',
    connection: {
      host: process.env.host,
      port: process.env.db_port,
      user: process.env.user,
      password: process.env.password,
      database: process.env.database
    },
    pool: {
      min: 0,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    debug: true,
  }
};
