import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughnutsComponent } from './doughnuts.component';

describe('DoughnutsComponent', () => {
  let component: DoughnutsComponent;
  let fixture: ComponentFixture<DoughnutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoughnutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoughnutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
