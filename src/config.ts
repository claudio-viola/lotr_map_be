/**
 * @file this file should contain all the configuration used across the service
 */

import * as assert from 'assert';
import * as dotenv from 'dotenv';

dotenv.config();

export const SERVER_PORT: number = Number(process.env.SERVER_PORT);

assert(!isNaN(SERVER_PORT) && SERVER_PORT > 0,
  'SERVER_PORT env var must be a valid port number');
