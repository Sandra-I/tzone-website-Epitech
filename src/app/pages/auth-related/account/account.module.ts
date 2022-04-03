import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { PlanService } from 'src/app/providers/plan.service';
import { ButtonModule } from 'src/app/components/button/button.module';
import { CustomTranslationModule } from 'src/app/shared/custom-translation/custom-translation-module';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountRoutingModule } from './account-routing.module';

@NgModule({
    declarations: [
        AccountComponent
    ],
    imports: [
        // LegalMentionModule,
        AccountRoutingModule,
        CommonModule,
        ButtonModule,
        CustomTranslationModule,
        ReactiveFormsModule
    ],
    exports: [
        AccountComponent
    ],
    providers: [
        PlanService
    ]
})

export class AccountModule { }