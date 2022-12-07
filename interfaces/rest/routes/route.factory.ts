import {Controller} from "../../../controllers/controller.factory";
import {Router, Request, Response} from "express";
import validate from "../../../middleware/validate.middleware";


interface Route<T> {
  controller: Controller<T>,
  router: Router
}

const makeRoute = <T>(controller: Controller<T>, schema: any): Route<T> => {
  const route: Route<T> = {
    controller: controller,
    router: Router()
  }
  route.router.get('/', async (req: Request, res: Response) => {
    const items = await route.controller.listItem();
    res.status(200).json(items);
  });
  route.router.get('/:id', async (req: Request, res: Response) => {
    const item = await route.controller.getItemById(req.params.id);
    res.status(200).json(item);
  });
  route.router.post('/', validate(schema), async (req: Request, res: Response) => {
    const item = await route.controller.insertItem(req.body);
    res.status(201).json(item);
  });
  return route;
}
export {
  Route,
  makeRoute
}