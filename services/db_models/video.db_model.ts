import {Model} from "objection";
import {VideoTable} from "./db_table";

class Video extends Model implements VideoTable {
  static get tableName() {
    return 'channel';
  }

  static get idColumn() {
    return 'id';
  }

  id!: number;
  title!: string;
  created_at!: string;
  updated_at!: string;
  channelId!: number;

}
export default Video;