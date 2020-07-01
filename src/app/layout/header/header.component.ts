import { Component, OnInit } from '@angular/core';
import { AccountServiceService } from 'src/app/_services/account-service.service';
import { Account } from 'src/app/_models/account';
import {FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  registerForm;
  loginForm;
  constructor(private service:AccountServiceService,
    private formBuilder:FormBuilder) { 
      this.registerForm = this.formBuilder.group({
        Username:'',
        Email:'',
        Password:''
      });
      this.loginForm = this.formBuilder.group({
        Email:'',
        Password:''
      });
    }
  
  
  ngOnInit(): void {
  }
  
  Register(user){
    this.service.Register(user);

  };
  Login(user){
    this.service.Login(user);
    
    
  }
  Logout(){
    this.service.Logout();
  }

  CloseModal(){
    if(this.service.isLogined){
      document.querySelector("#login").classList.remove("modal-open");
      document.body.classList.remove("modal-open");
      document.querySelector(".modal-backdrop").classList.remove("show");
      document.querySelector("#loginSignupModal").setAttribute("style", "display:none");
    }
  }
}
