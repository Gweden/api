  import { Person } from "../../interface/person.interface";

  export interface POI extends Person {
    offence: string;
    status: boolean;
    currentAddressId:string;
    Branch:string;
    homeAddressId:string;
    dateOfBaptism:string;
    tiktok?:string;
    facebook?:string;
    instagram?:string;
    occupation:string;
    father:string;
    mother:string;
    siblings:Array<string>;
  }