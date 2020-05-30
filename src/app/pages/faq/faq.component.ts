import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/_services/apiservice.service';
import { Faq } from 'src/app/_models/faq';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
   public faq: Faq[];
  constructor(private apiservice:ApiserviceService) { }

  ngOnInit(): void {
    this.getFaqs();
  }

  getFaqs(){
     this.apiservice.getFaqs().subscribe(
       data => {
         this.faq = data;
         console.log(this.faq)
       },
       error => {
         console.log(error);
       }
     )
  }

}
