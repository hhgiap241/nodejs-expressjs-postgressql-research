import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema
  .createTable('channel', table => {
    table.bigIncrements('id').unsigned().primary();
    table.string('name', 255).notNullable();
    table.timestamps(true, true);
  })
  .createTable('user', table => {
    table.bigIncrements('id').unsigned().primary();
    table.string('name', 255).notNullable();
    table.string('email').notNullable().unique();
    table.timestamps(true, true); // created_at, updated_at
    table.integer('channelId').references('id').inTable('channel');
  });
}


export async function down(knex: Knex): Promise<void> {
}

