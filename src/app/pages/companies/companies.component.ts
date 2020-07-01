import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/_services/company.service';
import { Company } from 'src/app/_models/company';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  companies;
  page:number=1;
  pagesize:number=12;
  constructor(private service:CompanyService) { 
    this.companies = new Array<Company>();
  }

  ngOnInit(): void {

   this.service.getCompanies().subscribe(
     data => {
       data.forEach(item => {
         this.companies.push(item);
         console.log(data);
       });
     }
   );
   console.log(this.companies);

   
  }
  
}
