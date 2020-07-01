import { Job } from './job';

export class Company {
    id:number;
    title:string;
    photo:string;
    name:string;
    about:string;
    foundDate: Date;
    location:string;
    teamSize:string;
    category:string;
    jobs:Array<Job>;
}
