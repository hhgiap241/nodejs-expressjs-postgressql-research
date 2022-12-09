import * as userService from '../services/user.service';
import {Controller, makeController} from './controller.factory';
import UserModel from "../models/user.model";

const userController: Controller<UserModel> = makeController({
  getItemById: userService.getUserById,
  listItem: userService.getAllUsers,
  insertItem: userService.insertUser,
});

export default userController;