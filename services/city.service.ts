import cityDao from "./dao/city.dao";
import {City} from "../models/model";

class CityService {
  createCity(city: City) {
    return cityDao.createCity(city);
  }

  getAllCities() {

    return cityDao.getAllCities();
  }
}

export default new CityService();