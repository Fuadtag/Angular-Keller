import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from 'src/app/_services/company.service';
import { Company } from 'src/app/_models/company';
import { Job } from 'src/app/_models/job';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnInit {
  id:number;
  company:Company;
  constructor(private activatedRoute:ActivatedRoute,
    private httpClient:CompanyService
    )
    {
  this.id = this.activatedRoute.snapshot.params["{id}"];

      this.httpClient.getCompanyById(this.id).subscribe(
        data => {
          this.company = data;
          console.log(data);
        },
        error => {
          console.log(error)
        }
      );
      
    
    
   }

  ngOnInit(): void {
    
  }

}
