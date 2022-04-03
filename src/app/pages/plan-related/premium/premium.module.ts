import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { PremiumComponent } from './premium.component';
import { PremiumRouterModule } from './premium-router.module';
import { CustomTranslationModule } from 'src/app/shared/custom-translation/custom-translation-module';
import { ButtonModule } from 'src/app/components/button/button.module';

@NgModule({
  declarations: [
   PremiumComponent
  ],
  imports: [
    CommonModule,
    PremiumRouterModule,
    CustomTranslationModule,
    ButtonModule,
  ],
  exports: [
   PremiumComponent
  ]
}) 

export class PremiumModule { }