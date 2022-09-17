import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPercentageComponent } from './sales-percentage.component';

describe('SalesPercentageComponent', () => {
  let component: SalesPercentageComponent;
  let fixture: ComponentFixture<SalesPercentageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesPercentageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
