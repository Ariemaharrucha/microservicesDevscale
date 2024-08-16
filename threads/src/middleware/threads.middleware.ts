import { NextFunction, Request, Response } from "express";

export async function middleWareCheckorigin(req:Request, res:Response, next:NextFunction) {
    if(req.headers.host === 'localhost:3000') {
        next();
    } else {
        res.status(403).send('Forbidden');
    }
}