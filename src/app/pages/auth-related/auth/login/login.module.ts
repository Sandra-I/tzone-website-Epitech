import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { CustomTranslationModule } from 'src/app/shared/custom-translation/custom-translation-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'src/app/components/button/button.module';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
    declarations: [
        LoginComponent,
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
        LoginComponent
    ]
})

export class LoginModule { }