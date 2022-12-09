import {Model} from "objection";

class Video extends Model {
  static get tableName() {
    return 'channel';
  }

  static get idColumn() {
    return 'id';
  }

}
export default Video;