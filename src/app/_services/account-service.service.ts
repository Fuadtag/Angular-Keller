import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../_models/account';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {
  constructor(private httpClient: HttpClient,
    private cookieService:CookieService) { }

  Register(user:Account) {
    return this.httpClient.post<Account>("https://localhost:44346/api/account/register", user).subscribe(
      data => {
        this.cookieService.set("UserCookie", data.token);
        
      },
      error => {
        console.log(error);
      }

    );
  };
  Login(user:Account){
    return this.httpClient.post("https://localhost:44346/api/account/login", user).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }

}
