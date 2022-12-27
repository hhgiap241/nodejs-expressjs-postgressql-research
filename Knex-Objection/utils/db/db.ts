import knex from 'knex';
import knexConfig from "./knexfile";
import {Model} from "objection";

const db = knex(knexConfig.development);
const setupDb = () => {
  Model.knex(db);
}
export {
  setupDb,
  db
};