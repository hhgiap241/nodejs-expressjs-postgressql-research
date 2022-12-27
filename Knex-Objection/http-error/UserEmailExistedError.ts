import HttpError from "./HttpError";

class UserEmailExistedError extends HttpError {
  public from: string;
  constructor(status: number, message: string) {
    super(status, message);
    this.from = 'UserEmailExistedError';
  }
}

export default UserEmailExistedError;