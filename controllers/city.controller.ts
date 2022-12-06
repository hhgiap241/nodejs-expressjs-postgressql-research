import * as cityService from "../services/city.service";
import {City} from "../models/model";
import {Controller, makeController} from "./controller.factory";

const cityController: Controller<City> = makeController({
  listItem: cityService.getAllCities,
  insertItem: cityService.insertCity,
  getItemById: cityService.getCityById
});

export default cityController;