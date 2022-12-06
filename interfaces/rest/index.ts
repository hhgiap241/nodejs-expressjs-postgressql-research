import express, {Request, Response, NextFunction} from "express"
import * as cityController from "../../controllers/city.controller";
import * as citySchema from '../../schemas/city.schema.json';
import validate from "../../middleware/validate.middleware";

export const registerInterface = (app: express.Application) => {
  app.use(restApi);
}

const restApi: express.Router = express.Router({mergeParams: true});

restApi.get("/api/v1/cities", async (req: Request, res: Response) => {
  try {
    const cities = await cityController.getAllCities();
    res.status(200).json(cities);
  } catch (error) {
    res.status(500).json(error);
  }
});

restApi.post("/api/v1/cities", validate(citySchema), async (req: Request, res: Response) => {
  let city = await cityController.createCity(req.body);
  res.status(201).json(city);
})