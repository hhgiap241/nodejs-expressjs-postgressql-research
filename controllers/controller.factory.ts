import {City} from "../models/model";

interface Service<T> {
  getItemById(id: string): Promise<T>,

  listItem(): Promise<T[]>,

  insertItem(item: T): Promise<T>,
}

interface Controller<T> {
  getItemById(id: string): Promise<T>,

  listItem(): Promise<T[]>,

  insertItem(item: T): Promise<T>,
}

const makeController = <T>(service: Service<T>): Controller<T> => {

  return {
    getItemById: async (id: string): Promise<T> => {
      try {
        return await service.getItemById(id);
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    listItem: async (): Promise<T[]> => {
      return await service.listItem();
    },
    insertItem: async (item: T): Promise<T> => {
      return await service.insertItem(item);
    }
  }
}

export {
  makeController,
  Controller,
  Service
}