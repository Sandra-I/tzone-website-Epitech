import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';
import { resetModule } from './reset/reset.module';

@NgModule({
    declarations: [
        AuthComponent
    ],
    imports: [
        CommonModule,
        LoginModule,
        SignupModule,
        resetModule
    ],
    exports: [
        AuthComponent
    ]
})

export class AuthModule { }