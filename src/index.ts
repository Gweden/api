import Express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import http from 'http';
import bodyParser from 'body-parser';
import apiRoutes from './routes/index'
import CorsOptions from '../config/cors-options'
import rateLimit from 'express-rate-limit'

dotenv.config()
const app = Express()
try {
    const port = process.env.APP_PORT

    /*const credentials = {
        key: privateKey,
        cert: certificate,
        rejectUnauthorized: false,
    }*/

    app.set('Secret', process.env.API_SECRET)
    app.use(helmet())
    app.use(cors(CorsOptions))
    app.use(rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 750 // limit each IP to 500 requests per windowMs,

    }))
    app.use(bodyParser.json({ limit: '50mb' }))
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }))
    app.use(cookieParser())
    app.use('/api', apiRoutes)

    app.all('*', (_:any, res:any) => {
        res.sendStatus(404)
    })

    app.disable('x-powered-by')

    const httpsServer = http.createServer(app)
    httpsServer.listen(port, () => {
        console.log(`HTTPS Server running on port ${port}`)
    })

} catch (error) {
    console.error(`Error Occured! - ${error}`)
}

