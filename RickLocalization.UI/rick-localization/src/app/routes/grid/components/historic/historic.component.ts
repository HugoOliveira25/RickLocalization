import { Subject } from 'rxjs';
import { GridService } from './../../grid.service';
import { HistoricViewModel } from './../../view-models/historic-viewmodel';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.css']
})
export class HistoricComponent implements OnInit {

  historic: HistoricViewModel[];
  subject$: Subject<void> = new Subject<void>();
  constructor(private activatedRoute: ActivatedRoute, private gridService: GridService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];

      this.gridService.getHistoric(id).pipe(takeUntil(this.subject$)).subscribe(data => this.historic = data, error => console.log(error));

    });
  }

  ngOnDestroy(): void {
    this.subject$.next();
    this.subject$.complete();

  }

}
