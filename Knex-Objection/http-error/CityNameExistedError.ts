import HttpError from "./HttpError";

export class CityNameExistedError extends HttpError {
  public from: string;
  constructor(status: number, message: string){
    super(status, message);
    this.from = 'CityNameExistedError';
  }
}
export default CityNameExistedError;