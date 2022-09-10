import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsCategoriesComponent } from './categories.component';

describe('CategoriesComponent', () => {
  let component: CollectionsCategoriesComponent;
  let fixture: ComponentFixture<CollectionsCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollectionsCategoriesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CollectionsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
