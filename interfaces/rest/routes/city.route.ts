import express, {Request, Response} from 'express';
import validate from "../../../middleware/validate.middleware";
import * as citySchema from "../../../schemas/city.schema.json";
import cityController from "../../../controllers/city.controller";
import HttpError from "../../../http-error/HttpError";

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const cities = await cityController.listItem();
    res.status(200).json(cities);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const city = await cityController.getItemById(req.params.id);
    res.status(200).json(city);
  } catch (error) {
    if (error instanceof HttpError) {
      res.status(error.status).json(error);
    } else {
      res.status(500).json(error);
    }
  }
});


router.post('/', validate(citySchema), async (req: Request, res: Response) => {
  let city = await cityController.insertItem(req.body);
  res.status(201).json(city);
});
export default router;