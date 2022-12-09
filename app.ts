import morgan from "morgan";
import express, {Application} from "express";
// import * as dotenv from 'dotenv';
import {PORT} from "./config";
import "express-async-errors";
import {registerInterface} from "./interfaces/rest";
import {registerErrorHandlingMiddleware} from "./middleware/error.middleware";
import {setupDb} from "./utils/db/db";

// dotenv.config({path: './.env'});
// set up db
setupDb();

const app: Application = express();
app.use(express.json());
app.use(morgan('dev'));


registerInterface(app);
registerErrorHandlingMiddleware(app);

const APP_PORT = PORT || 3000;
app.listen(APP_PORT, function () {
  console.log(`Server is listening at http://localhost:${APP_PORT}`);
})
