import express from 'express'
import * as blacklist from '../controllers/blacklist'
const apiRouter = express.Router()

apiRouter.get('/', blacklist.getData)
apiRouter.get('/:id', blacklist.getById)
apiRouter.get('/:id/whitelist', blacklist.whiteList)
apiRouter.post('/add', blacklist.add)
apiRouter.patch('/remove/:id', blacklist.remove)
apiRouter.post('/update/:id', blacklist.update)
apiRouter.get('/:id/blacklist', blacklist.blackList)

export default apiRouter