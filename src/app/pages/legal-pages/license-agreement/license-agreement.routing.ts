import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { LicenseAgreementComponent } from './license-agreement.component';

const routes: Routes = [
  {
    path: '',
    component: LicenseAgreementComponent
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})  

export class LicenseAgreementRoutingModule { }