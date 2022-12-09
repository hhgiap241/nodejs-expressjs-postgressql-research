export interface CityTable {
  city_id: number;
  city_name: string;
}

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