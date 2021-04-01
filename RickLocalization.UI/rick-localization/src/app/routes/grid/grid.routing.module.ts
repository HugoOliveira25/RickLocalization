import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoricComponent } from './components/historic/historic.component';

import { DetailComponent } from './components/detail/detail.component';


const gridRoutes: Routes = [
    { path: 'detail/:id', component: DetailComponent },
    { path: 'historic/:id', component: HistoricComponent },
];

@NgModule({
    imports: [RouterModule.forChild(gridRoutes)],
    exports: [RouterModule]
})
export class GridRoutingModule { }