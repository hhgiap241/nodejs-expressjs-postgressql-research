import {config} from 'dotenv';

config({
  path: '.env'
});
console.dir(process.env);
export const {
  PORT,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
} = process.env;
