import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { CustomTranslationPipe } from './custom-translation.pipe';

@NgModule({
  declarations: [
   CustomTranslationPipe
  ],
  imports: [
   CommonModule
  ],
  exports: [
   CustomTranslationPipe
  ]
}) 

export class CustomTranslationModule { }