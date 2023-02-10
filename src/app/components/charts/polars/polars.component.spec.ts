import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolarsComponent } from './polars.component';

describe('PolarsComponent', () => {
  let component: PolarsComponent;
  let fixture: ComponentFixture<PolarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
