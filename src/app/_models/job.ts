import { Company } from './company';

enum Jobtype{
    Fulltime,
    PartTime,
    Freelance,
    Remote
}

export class Job {
    id:number;
    company:Company;
    title:string;
    description:string;
    publishDate:Date;
    salary:string;
    experience:string;
    deadline:Date;
    responsibilitie:string;
    benefit:string;
    type:Jobtype;
}
