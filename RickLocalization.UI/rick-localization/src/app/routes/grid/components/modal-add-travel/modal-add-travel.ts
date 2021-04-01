import { HistoricViewModel } from './../../view-models/historic-viewmodel';
import { GridService } from './../../grid.service';
import { Component, Inject, Input } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Observable, Subject } from "rxjs";
import { map, startWith, takeUntil } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'dialog-modal',
    templateUrl: './dialog-modal.html',
    styleUrls: ['./dialog-modal.css']
})
export class DialogOverviewExampleDialog {
    options: string[];
    filteredOptions: Observable<string[]>;
    formGroup: FormGroup;
    viewModel: HistoricViewModel;
    subject$: Subject<void> = new Subject();

    @Input() idRickAndMorty: number;



    constructor(
        public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private gridService: GridService,
        private fb: FormBuilder,
        private activatedRoute: ActivatedRoute) { }


    ngOnInit(): void {

        this.viewModel = new HistoricViewModel();
        let id = this.activatedRoute.snapshot.params['id'];
        this.viewModel.IdRickAndMorty = id;

        this.formGroup = this.fb.group({
            Location: [this.viewModel.Location, Validators.required],
        });

        this.options = this.gridService.getLocations();

        this.filteredOptions = this.formGroup.controls['Location'].valueChanges
            .pipe(
                startWith(''),
                map(value => this._filter(value))
            );

    }

    addTravel() {
        let idRickAndMorty = this.dialogRef.id;
        this.viewModel.IdRickAndMorty = Number.parseInt(idRickAndMorty);
        this.viewModel.Location = this.formGroup.controls['Location'].value;
        this.viewModel.Id = 0;
        this.gridService.addTravel(this.viewModel).pipe(takeUntil(this.subject$)).subscribe(data => { console.log(data); this.onNoClick(); }, error => console.log(error));

    }

    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();

        return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
    ngOnDestroy(): void {
        this.subject$.next();
        this.subject$.complete();

    }
}