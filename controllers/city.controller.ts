import cityService from "../services/city.service";
import {Request, Response} from "express";

class HttpCityController {
  async createCity(req: Request, res: Response) {
    try {
      const city = await cityService.createCity(req.body);
      res.status(201).json(city);
    } catch (err: any) {
      console.log(`Error while creating city: `, err.message);
      res.status(400).json({error: err.message});
    }
  }

  async getAllCities(req: Request, res: Response) {
    try {
      const cities = await cityService.getAllCities();
      res.json(cities);
    } catch (err: any) {
      console.log(`Error while getting cities: `, err.message);
      res.status(400).json({error: err.message});
    }
  }
}

export default new HttpCityController();