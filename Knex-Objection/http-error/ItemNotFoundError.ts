import HttpError from "./HttpError";

class ItemNotFoundError extends HttpError {
  public from: string;
  constructor(status: number, message: string) {
    super(status, message);
    this.from = 'ItemNotFoundError';
  }
}

export default ItemNotFoundError;