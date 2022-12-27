import {Knex} from "knex";

export async function seed(knex: Knex): Promise<void> {
  // truncate all existing tables
  await knex.raw('TRUNCATE TABLE "user" CASCADE');
  await knex.raw('TRUNCATE TABLE "channel" CASCADE');
  await knex.raw('TRUNCATE TABLE "video" CASCADE');
  // import data
  await knex('channel').insert([
    {
      id: 1,
      name: 'Channel 1',
    },
    {
      id: 2,
      name: 'Channel 2',
    }
  ]);
  await knex('user').insert([
    {
      id: 1,
      name: 'User 1',
      email: 'user1@email.com',
      channelId: 1
    },
    {
      id: 2,
      name: 'User 2',
      email: 'user2@email.com',
      channelId: 2
    },
    {
      id: 3,
      name: 'User 3',
      email: 'user3@email.com'
    },
  ]);

  return knex('video').insert([
    {
      id: 1,
      title: 'Video 1',
      channelId: 1
    },
    {
      id: 2,
      title: 'Video 2',
      channelId: 1
    },
    {
      id: 3,
      title: 'Video 3',
      channelId: 2
    },
  ]);
};
