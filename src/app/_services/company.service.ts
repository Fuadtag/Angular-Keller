import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../_models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  
  constructor(private httpService:HttpClient) {
   }

  getCompanies(){
    return this.httpService.get<Company[]>("https://localhost:44346/api/company/list");
  }
  getCompanyById(id:number){
    return this.httpService.get<Company>("https://localhost:44346/api/company/detail/"+ id);
  }
}
