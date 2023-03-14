import { POI } from "./POI";
import * as data from "./data";


export const findAll = async (): Promise<Array<POI>> => {
    return data.poi;
};

export const getById = async(id:number):Promise<POI> =>{
    try{
        let res:POI = data.poi.filter((x:POI)=>{return x.idNumber===id})[0];
        return res;
    }
    catch(e){
        throw Error("Person does not exist");
    }
    
}

export const blackList = async(id:number):Promise<POI> =>{
    try{
        let idx = data.poi.findIndex((x:POI) => x.idNumber === id);
        data.poi[idx].status = true;
        return data.poi[idx];
    }
    catch(e){
        throw Error("Person does not exist");
    }
}

export const whiteList = async(id:number):Promise<POI> =>{
    try{
        console.log('whiteList'+id);
        let idx = data.poi.findIndex((x:POI) => x.idNumber === id);
        data.poi[idx].status = false;
        return data.poi[idx];
    }
    catch(e){
        throw Error("Person does not exist");
    }
}

export const add = async (poi:POI):Promise<POI> =>{
    try{
        data.poi.push(poi);
        return poi;
    }
    catch(e){
        throw Error("Person does not exist");
    }
}

export const update = async (id:number, poi:POI):Promise<POI> =>{
    try{
        let idx = data.poi.findIndex((x:POI) => x.idNumber === id);
        data.poi[idx] = poi;
        return data.poi[idx];
    }
    catch(e){
        throw Error("Person does not exist");
    }
}

export const remove = async(id:number):Promise<string> =>{
    try{
        let idx = data.poi.findIndex((x:POI) => x.idNumber === id);
        data.poi.splice(idx,1);
        return 'Ok';
    }
    catch(e){
        throw Error("Person does not exist");
    }
    
}