import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInfoSectionComponent } from './product-info-section.component';

describe('ProductInfoSectionComponent', () => {
  let component: ProductInfoSectionComponent;
  let fixture: ComponentFixture<ProductInfoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductInfoSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductInfoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
