import {City} from "../models/model";
import {CityTable} from "./db_table";
import db from "../utils/db/db";
import CityNotFoundError from "../http-error/CityNotFoundError";
import CityNameExistedError from "../http-error/CityNameExistedError";

const insertCity = async (city: City): Promise<City> => {
  const cityTable = convertToDbObject(city);
  const [result] = await db('city').where('city_name', cityTable.city_name);
  if (result) {
    throw new CityNameExistedError(400, 'City already exists');
  }

  const [insertedCity] = await db('city').insert({
    city_name: cityTable.city_name,
  }).returning('*');

  // convert to city model
  return convertToModelObject(insertedCity);
}

const getAllCities = async (): Promise<City[]> => {
  // convert to city model
  const citiesTable = await db('city');

  return citiesTable.map(convertToModelObject);
}

const getCityById = async (id: string): Promise<City> => {
  const [city] = await db('city').where('city_id', id);
  if (!city) {
    throw new CityNotFoundError(404, 'City not found');
  }
  return convertToModelObject(city);
}

function convertToDbObject(city: City): CityTable {
  const cityTable: CityTable = {
    city_id: city.city_id,
    city_name: city.city_name,
  };
  return cityTable;
}

function convertToModelObject(cityTable: CityTable): City {
  const city: City = {
    city_id: cityTable.city_id,
    city_name: cityTable.city_name
  };
  return city;
}

export {
  insertCity,
  getAllCities,
  getCityById
}