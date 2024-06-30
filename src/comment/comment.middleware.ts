import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class CommentMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
   console.log('Comment MiddleWare is called');
   if (req.headers.authorization != "Bearer abc") {
      res.status(401).json(
       {message: "Unauthorized"});
      return;
   }
    next();
  }
}
