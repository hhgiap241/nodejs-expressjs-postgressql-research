import VideoModel from "../models/video.model";
import Video from "./db_models/video.db_model";
import {VideoTable} from "./db_models/db_table";
import ItemNotFoundError from "../http-error/ItemNotFoundError";

const getAllVideos = async (): Promise<VideoModel[]> => {
  const videosTable = await Video.query().select().from('video');
  return videosTable.map(convertToModelObject);
}

const getVideoById = async (id: string): Promise<VideoModel> => {
  const findVideo = await Video.query().findById(id);
  if (!findVideo)
    throw new ItemNotFoundError(404, "Video doesn't exist");
  return convertToModelObject(findVideo);
}

const insertVideo = async (video: VideoModel): Promise<VideoModel> => {
  const videoTable = convertToDbObject(video);
  const createVideoData: Video = await Video.query()
                                            .insert(videoTable)
                                            .into('video');
  return convertToModelObject(createVideoData);
}

const convertToDbObject = (video: VideoModel): VideoTable => {
  return {
    id: video.id,
    title: video.title,
    created_at: video.created_at,
    updated_at: video.updated_at,
    channelId: video.channelId
  };
}
const convertToModelObject = (videoTable: VideoTable): VideoModel => {
  return {
    id: videoTable.id,
    title: videoTable.title,
    created_at: videoTable.created_at,
    updated_at: videoTable.updated_at,
    channelId: videoTable.channelId
  };
}

export {
  getAllVideos,
  getVideoById,
  insertVideo
}