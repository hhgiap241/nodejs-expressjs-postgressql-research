import ChannelModel from "../models/channel.model";
import Channel from './db_models/channel.db_model';
import {ChannelTable} from "./db_models/db_table";
import ItemNotFoundError from "../http-error/ItemNotFoundError";

const getAllChannels = async (): Promise<ChannelModel[]> => {
  const channelsTable = await Channel
                              .query()
                              .select()
                              .from('channel');
  return channelsTable.map(convertToModelObject);
}

const getChannelById = async (id: string): Promise<ChannelModel> => {
  const findChannel = await Channel
                              .query()
                              .findById(id);
  if (!findChannel)
    throw new ItemNotFoundError(404, "Channel doesn't exist");
  return convertToModelObject(findChannel);
}

const insertChannel = async (channel: ChannelModel): Promise<ChannelModel> => {
  const channelTable = convertToDbObject(channel);
  const createChannelData: Channel = await Channel.query()
                                                  .insert(channelTable)
                                                  .into('channel');
  return convertToModelObject(createChannelData);
}

const convertToDbObject = (channel: ChannelModel): ChannelTable => {
  return {
    id: channel.id,
    name: channel.name,
    created_at: channel.created_at,
    updated_at: channel.updated_at
  };
}

const convertToModelObject = (channelTable: ChannelTable): ChannelModel => {
  return {
    id: channelTable.id,
    name: channelTable.name,
    created_at: channelTable.created_at,
    updated_at: channelTable.updated_at
  };
}

export {
  getAllChannels,
  getChannelById,
  insertChannel
}