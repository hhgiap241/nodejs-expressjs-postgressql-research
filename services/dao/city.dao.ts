import db from '../../utils/db/db';
import {City} from "../../models/model";
import {CityTable} from "../db_table";

class CityDao {
  async createCity(cityTable: CityTable): Promise<CityTable> {
    const [insertedCity] = await db('city').insert({
      city_name: cityTable.city_name,
    }).returning('*');
    return insertedCity;
  }

  async getAllCities(): Promise<CityTable[]> {
    return await db('city');
  }
}

export default new CityDao();