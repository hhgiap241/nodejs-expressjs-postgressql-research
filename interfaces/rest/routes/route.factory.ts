import {Controller} from "../../../controllers/controller.factory";
import {Router, Request, Response} from "express";

interface Route<T> {
  basePath: string,
  controller: Controller<T>,
  router: Router
}

const makeRoute = <T>(basePath: string, controller: Controller<T>): Route<T> => {
  const route: Route<T> = {
    basePath: basePath,
    controller: controller,
    router: Router()
  }
  route.router.get(`${route.basePath}/`, async (req: Request, res: Response) => {
    const items = await route.controller.listItem();
    res.status(200).json(items);
  });
  route.router.get(`${route.basePath}/:id`, async (req: Request, res: Response) => {
    const item = await route.controller.getItemById(req.params.id);
    res.status(200).json(item);
  });
  route.router.post(`${route.basePath}/`, async (req: Request, res: Response) => {
    const item = await route.controller.insertItem(req.body);
    res.status(201).json(item);
  });
  return route;
}
export {
  Route,
  makeRoute
}