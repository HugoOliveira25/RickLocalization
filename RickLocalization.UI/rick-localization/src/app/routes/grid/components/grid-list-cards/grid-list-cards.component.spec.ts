import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridListCardsComponent } from './grid-list-cards.component';

describe('GridListCardsComponent', () => {
  let component: GridListCardsComponent;
  let fixture: ComponentFixture<GridListCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridListCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridListCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
