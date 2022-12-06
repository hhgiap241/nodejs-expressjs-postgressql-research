import express, {Request, Response} from "express"
import cityRoute from "./routes/city.route";
import {loggerMiddleware} from "../../middleware/logger.middleware";
import userRoute from "./routes/user.route";

export const registerInterface = (app: express.Application) => {
  app.use('/api/v1/users', loggerMiddleware, userRoute);
  app.use('/api/v1/cities', cityRoute);
  app.use('/', (req: Request, res: Response) => {
    res.send('Home Page');
  });
}