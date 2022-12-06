import express from 'express';
import cityController from "../controllers/city.controller";
import * as citySchema from '../schemas/city.schema.json';
import validate from "../middleware/validate.middleware";


const router = express.Router();

router.get('/', cityController.getAllCities);

router.post('/', validate(citySchema), cityController.createCity);

export default router;