class ChannelModel {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  constructor() {
    this.id = 0;
    this.name = '';
    this.created_at = '';
    this.updated_at = '';
  }
}
export default ChannelModel;