import {Model} from "objection";
import {ChannelTable, UserTable} from "../db_table";
import Channel from "./channel.db_model";

class User extends Model implements UserTable {

  static get tableName() {
    return 'user';
  }

  static get idColumn() {
    return 'id';
  }

  static get relationMappings() {
    return {
      channel: {
        relation: Model.HasOneRelation,
        modelClass: Channel,
        join: {
          from: 'user.channelId',
          to: 'channel.id'
        }
      }
    }
  }

  id!: number;
  name!: string;
  email!: string;
  created_at!: string;
  updated_at!: string;
  channelId!: number;
}

export {
  User
};