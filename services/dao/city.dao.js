import db from '../../utils/db/db.js';

class CityDao {
  async createCity(city) {
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