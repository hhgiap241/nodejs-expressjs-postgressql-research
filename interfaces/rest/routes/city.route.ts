import express, {Request, Response} from 'express';
import validate from "../../../middleware/validate.middleware";
import * as citySchema from "../../../schemas/city.schema.json";
import cityController from "../../../controllers/city.controller";
import HttpError from "../../../http-error/HttpError";

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  const cities = await cityController.listItem();
  res.status(200).json(cities);
});

router.get('/:id', async (req: Request, res: Response) => {
  const city = await cityController.getItemById(req.params.id);
  res.status(200).json(city);
});


router.post('/', validate(citySchema), async (req: Request, res: Response) => {
  let city = await cityController.insertItem(req.body);
  res.status(201).json(city);
});
export default router;