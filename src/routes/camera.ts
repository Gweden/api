import express from 'express'
import * as camera from '../controllers/camera'
const apiRouter = express.Router()

apiRouter.get('/', camera.getData)
apiRouter.get('/:id', camera.getById)
apiRouter.get('/:id/start', camera.start)
apiRouter.get('/:id/stop', camera.stop)
apiRouter.post('/add', camera.add)
apiRouter.patch('/remove/:id', camera.remove)
apiRouter.post('/update/:id', camera.update)

export default apiRouter