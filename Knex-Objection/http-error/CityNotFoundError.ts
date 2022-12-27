import HttpError from "./HttpError";

class CityNotFoundError extends HttpError {
  public from: string;
  constructor(status: number, message: string) {
    super(status, message);
    this.from = 'CityNotFoundError';
  }
}

export default CityNotFoundError;