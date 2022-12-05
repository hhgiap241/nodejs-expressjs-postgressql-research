import cityDao from "./dao/city.dao.js";

class CityService {
  createCity(city) {
    return cityDao.createCity(city);
  }

  async getAllCities() {

    await cityDao.getAllCities();
  }
}

export default new CityService();