import * as userService from '../services/user.service';
import {User} from '../models/model';
import {Controller, makeController} from './controller.factory';

const userController: Controller<User> = makeController({
  getItemById: userService.getUserById,
  listItem: userService.getAllUsers,
  insertItem: userService.insertUser,
});

export default userController;