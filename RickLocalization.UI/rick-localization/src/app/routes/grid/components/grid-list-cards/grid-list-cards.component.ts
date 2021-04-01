import { GridService } from './../../grid.service';
import { RickAndMortyCardViewModel } from '../../view-models/rick-and-morty-card';
import { Component, Input, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grid-list-cards',
  templateUrl: './grid-list-cards.component.html',
  styleUrls: ['./grid-list-cards.component.css']
})


export class GridListCardsComponent implements OnInit {


  @ViewChild(MatPaginator) paginator: MatPaginator;
  obs: Observable<any>;
  cards: RickAndMortyCardViewModel[];
  dataSource: MatTableDataSource<RickAndMortyCardViewModel>;

  constructor(private changeDetectorRef: ChangeDetectorRef, private router: Router, private gridService: GridService) { }

  ngOnInit(): void {


    this.cards = this.gridService.getRicksAndMortys();
    this.dataSource = new MatTableDataSource<RickAndMortyCardViewModel>(this.cards)

    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
  }
  ngOnDestroy(): void {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }

  }

  navigateToDetail(id: number) {
    this.router.navigate(['detail', id]);
  }

}
