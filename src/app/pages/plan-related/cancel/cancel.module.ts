import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CancelComponent } from './cancel.component';
import { CustomTranslationModule } from 'src/app/shared/custom-translation/custom-translation-module';
import { CancelRoutingModule } from './cancel-routing.module';
import { PlanService } from 'src/app/providers/plan.service';
import { ButtonModule } from 'src/app/components/button/button.module';

@NgModule({
    declarations: [
        CancelComponent
    ],
    imports: [
        CommonModule,
        CustomTranslationModule,
        CancelRoutingModule,
        ButtonModule
    ],
    exports: [
        CancelComponent
    ],
    providers: [
        PlanService
    ],
})

export class CancelModule { }