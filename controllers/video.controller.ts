import {Controller, makeController} from "./controller.factory";
import * as videoService from "../services/video.service";
import VideoModel from "../models/video.model";

const videoController: Controller<VideoModel> = makeController({
  getItemById: videoService.getVideoById,

  listItem: videoService.getAllVideos,

  insertItem: videoService.insertVideo
});

export default videoController;