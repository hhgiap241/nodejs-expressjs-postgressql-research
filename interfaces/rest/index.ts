import express, {Request, Response} from "express";
import userRoute from "./routes/user.route";
import channelRoute from "./routes/channel.route";
import videoRoute from "./routes/video.route";

const registerInterface = (app: express.Application) => {
  app.use('/api/v1/users', userRoute);
  app.use('/api/v1/channels', channelRoute);
  app.use('/api/v1/videos', videoRoute);
  app.use('/', (req: Request, res: Response) => {
    res.send('Home Page');
  });
}

export {registerInterface};