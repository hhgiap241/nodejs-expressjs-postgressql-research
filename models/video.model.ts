class VideoModel {
  id: number;
  title: string;
  created_at: string;
  updated_at: string;
  channelId: number;
  constructor() {
    this.id = 0;
    this.title = '';
    this.channelId = 0;
    this.created_at = '';
    this.updated_at = '';
  }
}
export default VideoModel;