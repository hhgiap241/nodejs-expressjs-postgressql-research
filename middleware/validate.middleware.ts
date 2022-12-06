// @ts-ignore
import Ajv from 'ajv';
import {NextFunction, Request, Response} from "express";

export default function validate(schema: any) {
  return function (req: Request , res: Response, next: NextFunction) {
    const ajv = new Ajv();
    const valid = ajv.validate(schema, req.body);
    if (!valid) {
      return res.status(400).json(ajv.errors);
    }
    next();
  }
}
