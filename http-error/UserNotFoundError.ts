import HttpError from "./HttpError";

class UserNotFoundError extends HttpError {
  public from: string;
  constructor(status: number, message: string) {
    super(status, message);
    this.from = 'UserNotFoundError';
  }
}

export default UserNotFoundError;