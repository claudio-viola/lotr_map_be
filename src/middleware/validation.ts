import * as express from 'express';
import { validateObject } from '../controllers/schemas';

/**
 * [schemaValidatorMiddleware Given a schema id validates the body of a request]
 * @param  schemaId [The schema id to be used to validate]
 * @return          [void]
 */
export function schemaValidator (schemaId: string) {

  return (req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (req.body !== null && req.body !== undefined) {
      const validationResult: boolean = validateObject(req.body, schemaId);
      if (validationResult === true) {
        next();
      } else {
        res.status(400).json();
      }
    } else {
      res.status(400).json();

      return;
    }
  };
}
