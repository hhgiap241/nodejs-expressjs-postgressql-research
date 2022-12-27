import VideoModel from "./video.model";

class ChannelModel {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  videos?: VideoModel[];
  isPopular?: boolean;
  constructor() {
    this.id = 0;
    this.name = '';
    this.created_at = '';
    this.updated_at = '';
    this.videos = [];
    this.isPopular = false;
  }
  getId?(): number;
}
export default ChannelModel;