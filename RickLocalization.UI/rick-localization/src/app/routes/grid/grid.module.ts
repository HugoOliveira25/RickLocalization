
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GridComponent } from './grid.component';
import { GridListCardsComponent } from './components/grid-list-cards/grid-list-cards.component';
import { GridService } from './grid.service';
import { DetailModule } from './components/detail/detail.module';
import { GridRoutingModule } from './grid.routing.module';
import { HistoricModule } from './components/historic/historic.module';
import { DialogOverviewExampleDialog } from './components/modal-add-travel/modal-add-travel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [
    GridComponent,
    GridListCardsComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    CommonModule,
    RouterModule,
    DetailModule,
    HistoricModule,
    GridRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule

  ],
  exports: [
    GridComponent
  ],
  providers: [
    GridService
  ]

})
export class GridModule { }
