import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/_services/company.service';
import { Company } from 'src/app/_models/company';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
 
})
export class CompaniesComponent implements OnInit {
  items = Array<Company>();
  pageSize:number=12;
  pageOfItems: Array<any>;
  
  
  constructor(private service:CompanyService) { 
    this.items = new Array<Company>();
  }

  ngOnInit(): void {

   this.service.getCompanies().subscribe(
     data => {
       this.items = data;
      console.log(this.items)
     },
     error=>{
       console.log(error);
     }
   );
   this.items = Array(this.items.length).fill(0).map((x, i) => ({ id: (i + 1), name: x.name, title: x.title, photo: x.photo, about: x.about, foundDate: x.foundDate, location:x.location, teamSize:x.teamSize, category: x.category, jobs: x.jobs }));
     console.log(this.items);
  };
  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
}
}
