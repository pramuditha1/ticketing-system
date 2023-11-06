import { NextFunction, Request, Response } from "express";
import { RequestValidationError } from "../errors/request-validation-errors";
import { DatabaseConnectionError } from "../errors/database-connection-error";

export const erorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof RequestValidationError) {
        return res.status(400).send({ errors: err.serializeErrors() });
      }
      if (err instanceof DatabaseConnectionError) {
        return res.status(500).send({ errors: err.serializeErrors() });
      }
    
      res.status(400).send({
        errors: [{ message: 'Something went wrong' }],
      });
}