import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTranslationModule } from 'src/app/shared/custom-translation/custom-translation-module';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin.routing.module';
import { PlanService } from 'src/app/providers/plan.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'src/app/components/button/button.module';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CustomTranslationModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule

  ],
  exports: [
    AdminComponent
  ]
})

export class AdminModule { }