import {Model} from "objection";
import {ChannelTable, VideoTable} from "./db_table";
import Video from "./video.db_model";

class Channel extends Model implements ChannelTable {
  static get tableName() {
    return 'channel';
  }

  static get idColumn() {
    return 'id';
  }

  static get relationMappings() {
    return {
      videos: {
        relation: Model.HasManyRelation,
        modelClass: Video,
        join: {
          from: 'channel.id',
          to: 'video.channelId'
        }
      }
    };
  }

  id!: number;
  name!: string;
  created_at!: string;
  updated_at!: string;
}

export default Channel;