import morgan from "morgan";
import express, {Application, Request, Response} from "express";
import {loggerMiddleware} from "./middleware/logger.middleware";
import * as dotenv from 'dotenv';
import userRoute from "./routes/user.route";
// import cityRoute from "./routes/city.route";
import {registerInterface} from "./interfaces/rest";

dotenv.config();

const app: Application = express();
app.use(express.json());
app.use(morgan('dev'));


app.use('/api/v1/users', loggerMiddleware, userRoute);
registerInterface(app);
// app.use('/api/v1/cities', cityRoute);
app.use('/', (req: Request, res: Response) => {
  res.send('Home Page');
})

const PORT = process.env.app_port;
app.listen(PORT, function () {
  console.log(`Server is listening at http://localhost:${PORT}`);
})
