import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersComponent } from './offers.component';
import { CustomTranslationModule } from 'src/app/shared/custom-translation/custom-translation-module';
import { OffersRoutingModule } from './offers-routing.module';

@NgModule({
  declarations: [
    OffersComponent
  ],
  imports: [
    CommonModule,
    OffersRoutingModule,
    CustomTranslationModule,
  ],
  exports: [
    OffersComponent
  ]
})

export class OffersModule { }