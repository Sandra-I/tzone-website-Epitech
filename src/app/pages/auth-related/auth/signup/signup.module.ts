import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CustomTranslationModule } from 'src/app/shared/custom-translation/custom-translation-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'src/app/components/button/button.module';

@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    CustomTranslationModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    AppRoutingModule
  ],
  exports: [
    SignupComponent
  ]
})

export class SignupModule { }