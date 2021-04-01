import { RickAndMortyCardViewModel } from '../../view-models/rick-and-morty-card';
import { GridService } from './../../grid.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from '../modal-add-travel/modal-add-travel';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id: number;
  viewModel: RickAndMortyCardViewModel
  constructor(
    private activatedRoute: ActivatedRoute,
    private gridService: GridService,
    public dialog: MatDialog,
    private router: Router) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];

      this.viewModel = this.gridService.getRickAndMortyById(this.id);


    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '400px',
      id: this.id.toString(),
    });
  }

  navigateToHostoric() {
    this.router.navigate(['historic', this.id]);

  }

}
