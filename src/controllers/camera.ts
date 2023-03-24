import { Request, Response } from "express";
import * as camService from "../services/camera/camera.service";
import { Camera } from "../interface/camera.interface";


export const getById = async (req:Request, res:Response) =>{
    try{
        const foundPerson = await camService.getById(Number(req.params.id));
        return res.status(200).send(foundPerson);
    }
    catch(error){
        return res.status(500).send(error);
    }
    
}

export const getData = async (_:Request, res:Response) =>{
    try{
        const data:Array<Camera> = await camService.findAll();
        return res.status(200).send(data);
    }
    catch(error){
        return res.status(500).send(error);
    }
}

export const start = async (req:Request, res:Response) =>{
    try{
        const Camera = await camService.blackList(Number(req.params.id));
        return res.status(200).send(Camera);
    }
    catch(error){
        return res.status(500).send(error);
    }
}

export const stop = async (req:Request, res:Response) =>{
    try{
        const Camera = await camService.whiteList(Number(req.params.id));
        return res.status(200).send(Camera);
    }
    catch(error){
        return res.status(500).send(error);
    }
}

export const add = async (req:Request, res:Response) =>{
    try{
        const added = await camService.add(req.body);
        return res.status(200).send(added);
    }
    catch(error){
        return res.status(500).send(error);
    }
}

export const update = async (req:Request, res:Response) =>{
    try{
        const Camera = await camService.update(Number(req.params.id),req.body);
        return res.status(200).send(Camera);
    }
    catch(error){
        return res.status(500).send(error);
    }
}

export const remove = async (req:Request, res:Response) =>{
    try{
        const result = await camService.remove(Number(req.params.id));
        return res.status(200).send(result);
    }
    catch(error){
        return res.status(500).send(error);
    }
}