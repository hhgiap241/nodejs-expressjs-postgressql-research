import HttpError from "./HttpError";

export class DBConnectionError extends HttpError {
  public from: string;
  constructor(status: number, message: string){
    super(status, message);
    this.from = 'DBConnectionError';
  }
}
export default DBConnectionError;