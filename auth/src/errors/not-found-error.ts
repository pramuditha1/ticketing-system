import { CustomError } from "./custom-error";

export class NotFoundError extends CustomError {
    statusCode = 404;

    constructor() {
        super('route not found');
    
        // Only because we are extending a built in class
        Object.setPrototypeOf(this, NotFoundError.prototype);
      }

      serializeErrors() {
        return[{message: "Not found!"}]
      } 
}