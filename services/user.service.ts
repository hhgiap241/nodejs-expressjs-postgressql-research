import {User as Users} from "./db_models/user.db_model";
import UserNotFoundError from "../http-error/UserNotFoundError";
import {UserTable} from "./db_models/db_table";
import UserEmailExistedError from "../http-error/UserEmailExistedError";
import UserModel from "../models/user.model";

const getAllUsers = async (): Promise<UserModel[]> => {
  // convert to user model
  const usersTable = await Users
                              .query()
                              .select()
                              .from('user')
                              .withGraphFetched('channel');
  return usersTable.map(convertToModelObject);
}

const getUserById = async (id: string): Promise<UserModel> => {
  const findUser = await Users
                            .query()
                            .findById(id)
                            .withGraphFetched('channel');
  if (!findUser)
    throw new UserNotFoundError(404, "User doesn't exist");
  return convertToModelObject(findUser);
}

const insertUser = async (user: UserModel): Promise<UserModel> => {
  const userTable = convertToDbObject(user);
  const findUser = await Users
                          .query()
                          .select()
                          .from('user')
                          .where('email', '=', userTable.email)
                          .first();
  if (findUser)
    throw new UserEmailExistedError(400, `This email ${user.email} already exists`);
  const createUserData: Users = await Users.query()
                                            .insert(userTable)
                                            .into('user');
  return convertToModelObject(createUserData);
}

const convertToDbObject = (user: UserModel): UserTable => {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    created_at: user.created_at,
    updated_at: user.updated_at,
    channelId: user.channelId
  };
}

const convertToModelObject = (userTable: UserTable): UserModel => {
  return {
    id: userTable.id,
    name: userTable.name,
    email: userTable.email,
    created_at: userTable.created_at,
    updated_at: userTable.updated_at,
    channelId: userTable.channelId,
    channel: userTable.channel,
  };
}

export {
  getAllUsers,
  getUserById,
  insertUser
}