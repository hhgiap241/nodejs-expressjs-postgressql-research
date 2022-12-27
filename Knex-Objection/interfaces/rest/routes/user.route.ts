import userController from "../../../controllers/user.controller";
import {makeRoute, Route} from "./route.factory";
import userSchema from "../../../schemas/user.schema.json";

const userRoute: Route<any> = makeRoute(userController, userSchema);
export default userRoute.router;
