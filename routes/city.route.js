import express from 'express';
import cityModel from '../models/city.model.js';
import cityController from "../controllers/city.controller.js";
import {readFile} from 'fs/promises';
import validate from "../middleware/validate.middleware.js";

const citySchema = JSON.parse(
    await readFile(new URL('../schemas/city.schema.json', import.meta.url)));

const router = express.Router();

router.get('/', cityController.getAllCities);

router.post('/', validate(citySchema), cityController.createCity);

export default router;