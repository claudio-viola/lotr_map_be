import * as express from 'express';
import * as mapController from '../controllers/map';
import { schemaValidator } from '../middleware/validation';

const router: express.Router = express.Router();
router.post('/api/map/play',
  schemaValidator('/map/play'), mapController.play);

export {
    router,
};
