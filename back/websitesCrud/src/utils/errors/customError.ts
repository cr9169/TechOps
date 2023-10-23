// Note: Our custom error extends from Error, so we can throw this error as an exception.
export class CustomError extends Error {
  message!: string;
  status!: number;
  additionalInfo!: unknown;

  constructor(
    message: string,
    status = 500,
    additionalInfo: unknown = undefined
  ) {
    super(message);
    this.message = message;
    this.status = status;
    this.additionalInfo = additionalInfo;
  }
}
