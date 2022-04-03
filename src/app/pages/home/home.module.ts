import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { HomeComponent } from './home.component';
import { CustomTranslationModule } from 'src/app/shared/custom-translation/custom-translation-module';
import { HomeRoutingModule } from './home-routing.module';
import { ButtonModule } from 'src/app/components/button/button.module';

@NgModule({
  declarations: [
   HomeComponent
  ],
  imports: [
    CommonModule,
    CustomTranslationModule,
    HomeRoutingModule,
    ButtonModule
  ],
  exports: [
   HomeComponent
  ]
}) 

export class HomeModule { }