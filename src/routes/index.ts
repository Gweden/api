import express from 'express';
import auth from '../middleware/auth';
import blacklistRoute from './blacklist';
import cameraRoute from './camera';

const apiRouter = express.Router();

apiRouter.use('/blacklist', blacklistRoute);
apiRouter.use('/camera', cameraRoute);
apiRouter.use('/', auth);

export default apiRouter;
