import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadComponent } from './download.component';
import { DownloadRoutingModule } from './download.routing.module';
import { CustomTranslationModule } from 'src/app/shared/custom-translation/custom-translation-module';

@NgModule({
  declarations: [
    DownloadComponent
  ],
  imports: [
    CommonModule,
    DownloadRoutingModule,
    CustomTranslationModule

  ],
  exports: [
    DownloadComponent
  ]
})

export class DownloadModule { }