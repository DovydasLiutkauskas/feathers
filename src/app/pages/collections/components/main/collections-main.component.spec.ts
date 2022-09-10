import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsMainComponent } from './collections-main.component';

describe('MainComponent', () => {
  let component: CollectionsMainComponent;
  let fixture: ComponentFixture<CollectionsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollectionsMainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CollectionsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
