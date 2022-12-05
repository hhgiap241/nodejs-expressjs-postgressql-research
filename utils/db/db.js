import knex from 'knex';
import {knexfile} from "./knexfile.js";
import {config} from 'dotenv';

config();
export default knex(knexfile.development);
