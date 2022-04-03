import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { PrivacyPolicyComponent } from './privacy-policy.component';
import { CustomTranslationModule } from 'src/app/shared/custom-translation/custom-translation-module';
import { PrivacyPolicyRoutingModule } from './privacy-policy.routing';

@NgModule({
  declarations: [
   PrivacyPolicyComponent
  ],
  imports: [
    CommonModule,
    CustomTranslationModule,
    PrivacyPolicyRoutingModule
  ],
  exports: [
   PrivacyPolicyComponent
  ]
}) 

export class PrivacyPolicyModule { }