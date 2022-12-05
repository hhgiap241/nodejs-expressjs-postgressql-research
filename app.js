import morgan from "morgan";
import express from "express";
import {loggerMiddleware} from "./middleware/logger.middleware.js";
import * as dotenv from 'dotenv';
import userRoute from "./routes/user.route.js";
import cityRoute from "./routes/city.route.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(morgan('dev'));


app.use('/api/v1/users', loggerMiddleware, userRoute);
app.use('/api/v1/cities', cityRoute);
app.use('/', (req, res) => {
  res.send('Home Page');
})

const PORT = process.env.app_port;
app.listen(PORT, function () {
  console.log(`Server is listening at http://localhost:${PORT}`);
})
