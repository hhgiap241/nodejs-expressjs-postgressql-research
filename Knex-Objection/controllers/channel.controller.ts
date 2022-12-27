import {Controller, makeController} from "./controller.factory";
import * as channelService from "../services/channel.service";
import ChannelModel from "../models/channel.model";

const channelController: Controller<ChannelModel> = makeController({
  getItemById: channelService.getChannelById,
  listItem: channelService.getAllChannels,
  insertItem: channelService.insertChannel,
});

export default channelController;