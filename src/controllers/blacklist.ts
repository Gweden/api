import { Request, Response } from "express";
import * as POIService from "../services/blacklist/blacklist.service"
import { POI } from "../services/blacklist/POI";


export const getById = async (req:Request, res:Response) =>{
    try{
        const foundPerson = await POIService.getById(Number(req.params.id));
        return res.status(200).send(foundPerson);
    }
    catch(error){
        return res.status(500).send(error);
    }
}

export const getData = async (_:Request, res:Response) =>{
    try{
        const data:Array<POI> = await POIService.findAll();
        return res.status(200).send(data);
    }
    catch(error){
        return res.status(500).send(error);
    }
}

export const blackList = async (req:Request, res:Response) =>{
    try{
        const poi = await POIService.blackList(Number(req.params.id));
        return res.status(200).send(poi);
    }
    catch(error){
        return res.status(500).send(error);
    }
}

export const whiteList = async (req:Request, res:Response) =>{
    try{
        const poi = await POIService.whiteList(Number(req.params.id));
        return res.status(200).send(poi);
    }
    catch(error){
        return res.status(500).send(error);
    }
}

export const add = async (req:Request, res:Response) =>{
    try{
        const added = await POIService.add(req.body);
        return res.status(200).send(added);
    }
    catch(error){
        return res.status(500).send(error);
    }
}

export const update = async (req:Request, res:Response) =>{
    try{
        const poi = await POIService.update(Number(req.params.id),req.body);
        return res.status(200).send(poi);
    }
    catch(error){
        return res.status(500).send(error);
    }
}

export const remove = async (req:Request, res:Response) =>{
    try{
        const result = await POIService.remove(Number(req.params.id));
        return res.status(200).send(result);
    }
    catch(error){
        return res.status(500).send(error);
    }
}