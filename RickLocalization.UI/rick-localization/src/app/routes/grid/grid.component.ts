import { GridService } from './grid.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  constructor(private gridService: GridService) { }

  ricksAndMortys: any[];

  ngOnInit(): void {
    this.ricksAndMortys = this.gridService.getRicksAndMortys();

  }

}
