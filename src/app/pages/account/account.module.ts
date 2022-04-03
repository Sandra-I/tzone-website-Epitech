import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { ButtonModule } from 'src/app/components/button/button.module';
import { CustomTranslationModule } from 'src/app/shared/custom-translation/custom-translation-module';
import { AccountRoutingModule } from './account-routing.module';

@NgModule({
    declarations: [
        AccountComponent
    ],
    imports: [
        AccountRoutingModule,
        CommonModule,
        ButtonModule,
        CustomTranslationModule,
    ],
    exports: [
        AccountComponent
    ]
})

export class AccountModule { }