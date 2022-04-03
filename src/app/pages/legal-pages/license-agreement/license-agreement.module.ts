import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { LicenseAgreementComponent } from './license-agreement.component';
import { CustomTranslationModule } from 'src/app/shared/custom-translation/custom-translation-module';
import { LicenseAgreementRoutingModule } from './license-agreement.routing';

@NgModule({
  declarations: [
   LicenseAgreementComponent
  ],
  imports: [
    CommonModule,
    CustomTranslationModule,
    LicenseAgreementRoutingModule
  ],
  exports: [
    LicenseAgreementComponent
  ]
}) 

export class LicenseAgreementModule { }