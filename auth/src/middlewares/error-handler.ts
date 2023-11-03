import { NextFunction, Request, Response } from "express";

export const erorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log("someting went wrong!", err);
    res.status(400).send({
        message: "Someting went wrong!"
    })
}