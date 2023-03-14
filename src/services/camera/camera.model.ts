import { Camera } from "../../interface/camera.interface";

export class camera implements Camera {
    name: string;
    site: string;
    username : string
    password : string
    url : string
    status:boolean;
    constructor(obj:Camera){
        this.name = obj.name;
        this.site = obj.site;
        this.username = obj.username;
        this.password = obj.password;
        this.url = obj.url;
        this.status = false;
    }
}