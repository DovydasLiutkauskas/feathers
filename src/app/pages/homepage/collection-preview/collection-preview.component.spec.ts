import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionPreviewComponent } from './collection-preview.component';

describe('CollectionPreviewComponent', () => {
  let component: CollectionPreviewComponent;
  let fixture: ComponentFixture<CollectionPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
