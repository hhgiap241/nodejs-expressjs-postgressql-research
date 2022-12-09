import ChannelModel from "./channel.model";

class UserModel {
  id: number;
  email: string;
  name: string;
  created_at: string;
  updated_at: string;
  channelId: number;
  channel?: ChannelModel;
  constructor() {
    this.id = 0;
    this.email = '';
    this.name = '';
    this.created_at = '';
    this.updated_at = '';
    this.channelId = 0;
    this.channel = undefined;
  }
}

export default UserModel;