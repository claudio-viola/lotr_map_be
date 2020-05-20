/**
 * Index
 */
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as http from 'http';
import * as config from './config';
import { registerSchemas } from './controllers/schemas';
import { router } from './routes';

/**
 * init Runs the app
 */
export async function initServer (): Promise<http.Server> {
  registerSchemas();
  const app: express.Application = express();
  app.use(bodyParser.json());
  app.use(cors());
  app.use('/', router);

  return app.listen(config.SERVER_PORT);
}
