import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { JobDetailComponent } from './pages/job-detail/job-detail.component';
import { CompaniesComponent } from './pages/companies/companies.component';
import { CompanyDetailComponent } from './pages/company-detail/company-detail.component';
import { CreateJobComponent } from './pages/create-job/create-job.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { RouterModule } from '@angular/router';
const appRoutes = [
  {path: '', component: HomeComponent},
  {path: 'jobs', component: JobsComponent},
  {path: 'jobs/:{id}', component: JobDetailComponent},
  {path: 'companies', component:CompaniesComponent},
  {path: 'companies/:{id}', component:CompanyDetailComponent },
  {path: 'create-job', component:CreateJobComponent},
  {path: 'about-us', component:AboutUsComponent},
  {path: 'faq', component:FaqComponent},
  {path: 'pricing', component:PricingComponent},
  {path: 'contact-us', component:ContactUsComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    JobsComponent,
    JobDetailComponent,
    CompaniesComponent,
    CompanyDetailComponent,
    CreateJobComponent,
    AboutUsComponent,
    PricingComponent,
    FaqComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
