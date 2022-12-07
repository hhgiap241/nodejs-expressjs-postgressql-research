import cityController from "../../../controllers/city.controller";
import {makeRoute, Route} from "./route.factory";

const cityRoute: Route<any> = makeRoute('/api/v1/cities', cityController);
export default cityRoute.router;