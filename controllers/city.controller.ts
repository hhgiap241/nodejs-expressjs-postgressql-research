import * as cityService from "../services/city.service";
import {City} from "../models/model";
import {Controller, makeController} from "./controller.factory";

const cityController: Controller<City> = makeController({
  listItem: cityService.getAllCities,
  insertItem: cityService.insertCity
});

// async function createCity(city: City): Promise<City> {
//   const createCityResult = await cityController.insertItem(city);
//   return createCityResult;
// }
//
// async function getAllCities(): Promise<City[]> {
//   return await cityController.listItem();
// }
//
//
// export {
//   createCity,
//   getAllCities
// }

export default cityController;