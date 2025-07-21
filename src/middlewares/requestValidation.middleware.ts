import { Request, Response, NextFunction } from "express";
import { ZodTypeAny } from "zod";

interface IRequestSchemas {
  params?: ZodTypeAny;
  body?: ZodTypeAny;
  query?: ZodTypeAny;
}

export class RequestValidation {
  static execute(schemas: IRequestSchemas) {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        if (schemas.params) {
          (req as any).params = await schemas.params.parseAsync(req.params);
        }

        if (schemas.body) {
          (req as any).body = await schemas.body.parseAsync(req.body);
        }

        if (schemas.query) {
          (req as any).query = await schemas.query.parseAsync(req.query);
        }

        next();
      } catch (error) {
        next(error);
      }
    };
  }
}
