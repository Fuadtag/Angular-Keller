import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Faq } from '../_models/faq';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private httpService:HttpClient) { 

  }
  getFaqs(){
    return this.httpService.get<Faq[]>("https://localhost:44346/api/pages/faq");
  }
}
