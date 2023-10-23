import { CustomError } from "./customError";

export class UnauthorizedError extends CustomError {
  constructor(additionalData: string) {
    const message = "Unauthorized error!";
    super(`${message}\n ${additionalData}`, 401);
  }
}
