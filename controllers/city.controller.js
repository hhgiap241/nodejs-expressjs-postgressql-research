import cityService from "../services/city.service.js";
class HttpCityController{
  async createCity(req, res){
    try{
      const city = await cityService.createCity(req.body);
      res.status(201).json(city);
    }catch(err){
      console.log(`Error while creating city: `, err.message);
      res.status(400).json({error: err.message});
    }
  }

  async getAllCities(req, res){
    try{
      const cities = await cityService.getAllCities();
      res.json(cities);
    }catch(err){
      console.log(`Error while getting cities: `, err.message);
      res.status(400).json({error: err.message});
    }
  }
}
export default new CityController();