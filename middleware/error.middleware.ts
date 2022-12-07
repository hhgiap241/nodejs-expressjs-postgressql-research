import {Request, Response, NextFunction, Application} from "express";
import HttpError from "../http-error/HttpError";

const registerErrorHandlingMiddleware = (app: Application) => {
  app.use(errorHandlingMiddleware);
}
const errorHandlingMiddleware = (error: any, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof HttpError) {
    res.status(error.status).json({
      ...error,
      message: error.message,
    });
  } else {
    res.status(500).json(error);
  }
}

export default registerErrorHandlingMiddleware;