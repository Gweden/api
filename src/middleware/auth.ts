import { Request, Response, NextFunction } from 'express';
import jwt, { Secret, JwtPayload } from 'jsonwebtoken'
import dotenv from 'dotenv';

dotenv.config()

interface CustomRequest extends Request {
    token: string | JwtPayload;
}

const secret:Secret = String(process.env.API_SECRET);

const auth = async function (req:Request, res:Response, next:NextFunction) {
    try{
        const token = String(req.headers['access-token'])
        // decode token
        if (!token) {
            throw new Error();
        }
        // verifies secret and checks if the token is expired
        const decoded = jwt.verify(token, secret);
        (req as CustomRequest).token = decoded
        next()
    }
    catch(err:any){
        res.status(401).send({ message: 'Please Authenticate' })
    }
}

export default auth