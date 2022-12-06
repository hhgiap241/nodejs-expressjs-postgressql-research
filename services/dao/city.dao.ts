import db from '../../utils/db/db';
import {City} from "../../models/model";

class CityDao {
  async createCity(city: City) {
    const [insertedCity] = await db('city').insert({
      city_name: city.city_name,
    }).returning('*');
    return insertedCity;
  }

  async getAllCities() {
    return await db('city');
  }
}

export default new CityDao();