

export interface UserTable {
  id: number;
  email: string;
  name: string;
  created_at: string;
  updated_at: string;
  channelId: number;
  channel?: ChannelTable;
}

export interface ChannelTable {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface VideoTable {
  id: number;
  title: string;
  channelId: number;
  created_at: string;
  updated_at: string;
}