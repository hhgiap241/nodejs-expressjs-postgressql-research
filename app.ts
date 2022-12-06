import morgan from "morgan";
import express, {Application, Request, Response} from "express";
import * as dotenv from 'dotenv';
import {registerInterface} from "./interfaces/rest";

dotenv.config();

const app: Application = express();
app.use(express.json());
app.use(morgan('dev'));


registerInterface(app);

const PORT = process.env.app_port;
app.listen(PORT, function () {
  console.log(`Server is listening at http://localhost:${PORT}`);
})
