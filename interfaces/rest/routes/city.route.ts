import cityController from "../../../controllers/city.controller";
import {makeRoute, Route} from "./route.factory";
import citySchema from "../../../schemas/city.schema.json";

const cityRoute: Route<any> = makeRoute(cityController, citySchema);
export default cityRoute.router;