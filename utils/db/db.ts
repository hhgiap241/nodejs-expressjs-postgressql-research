import knex from 'knex';
import {knexfile} from "./knexfile";
import {config} from 'dotenv';

config();
export default knex(knexfile.development);
