import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { LegalMentionComponent } from './legal-mention.component';
import { CustomTranslationModule } from 'src/app/shared/custom-translation/custom-translation-module';
import { LegalMentionRoutingModule } from './legal-mention.routing';

@NgModule({
  declarations: [
   LegalMentionComponent
  ],
  imports: [
    CommonModule,
    CustomTranslationModule,
    LegalMentionRoutingModule
  ],
  exports: [
   LegalMentionComponent
  ]
}) 

export class LegalMentionModule { }