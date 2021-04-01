import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoricComponent } from './historic.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [HistoricComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HistoricModule { }
