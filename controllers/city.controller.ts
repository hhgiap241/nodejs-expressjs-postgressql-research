import * as cityService from "../services/city.service";
import {City} from "../models/model";

interface Service<T> {
  getItem(id: string): Promise<T>,
  listItem(): Promise<T[]>
}

interface Controller<T> {
  getItem(id: string): Promise<T>,
  listItem(): Promise<T[]>
}

const makeController = <T>(service: Service<T>): Controller<T> => {
  return {
    getItem: async (id: string): Promise<T> => {
      return await service.getItem(id);
    },
    listItem: async (): Promise<T[]> => {
      return await service.listItem();
    }
  }
}

async function createCity(city: City): Promise<City> {
  const createCityResult = await cityService.createCity(city);
  return createCityResult;
}

async function getAllCities(): Promise<City[]> {
  return await cityService.getAllCities();
}

export {
  createCity,
  getAllCities
}