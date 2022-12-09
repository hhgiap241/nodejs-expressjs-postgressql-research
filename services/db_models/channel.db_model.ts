import {Model} from "objection";
import {ChannelTable} from "./db_table";

class Channel extends Model implements ChannelTable {
  static get tableName() {
    return 'channel';
  }

  static get idColumn() {
    return 'id';
  }

  id!: number;
  name!: string;
  created_at!: string;
  updated_at!: string;
}

export default Channel;