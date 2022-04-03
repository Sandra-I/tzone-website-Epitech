import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { CustomTranslationModule } from 'src/app/shared/custom-translation/custom-translation-module';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    CustomTranslationModule,
    AboutRoutingModule
  ],
  exports: [
    AboutComponent
  ]
})

export class AboutModule { }