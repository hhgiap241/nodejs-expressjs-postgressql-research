import morgan from "morgan";
import express, {Application} from "express";
import * as dotenv from 'dotenv';

import "express-async-errors";
import {registerInterface} from "./interfaces/rest";
import {registerErrorHandlingMiddleware} from "./middleware/error.middleware";

dotenv.config();

const app: Application = express();
app.use(express.json());
app.use(morgan('dev'));


registerInterface(app);
registerErrorHandlingMiddleware(app);

const PORT = process.env.app_port;
app.listen(PORT, function () {
  console.log(`Server is listening at http://localhost:${PORT}`);
})
