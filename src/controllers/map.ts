import * as express from 'express';
import { executeMovements } from '../services/map';
import { MapMovements } from './interfaces';
/**
 * [create stores encrypted blob]
 * @param  req  [express req]
 * @param  res  [express res]
 * @param  next [express next]
 * @return      [void]
 */
export async function play (req: express.Request, res: express.Response) {
  try {
    const body = <MapMovements> req.body;
    const result = executeMovements(body.movements);

    return res.json(result);
  } catch (err) {
    res.sendStatus(500);
  }
}
