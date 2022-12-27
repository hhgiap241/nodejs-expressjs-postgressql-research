import {makeRoute, Route} from "./route.factory";
import videoController from "../../../controllers/video.controller";
import videoSchema from "../../../schemas/video.schema.json";

const videoRoute: Route<any> = makeRoute(videoController, videoSchema);

export default videoRoute.router;