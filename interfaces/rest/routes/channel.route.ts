import {makeRoute, Route} from "./route.factory";
import channelController from "../../../controllers/channel.controller";
import channelSchema from "../../../schemas/channel.schema.json";

const channelRoute: Route<any> = makeRoute(channelController, channelSchema);

export default channelRoute.router;