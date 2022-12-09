export interface City {
  city_id: number;
  city_name: string;
}

export interface User {
  id: number;
  email: string;
  name: string;
  created_at: string;
  updated_at: string;
  channelId: number;
  channel?: Channel;
}

export interface Channel {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}