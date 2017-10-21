import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantUrgentItemsComponent } from './important-urgent-items.component';

describe('ImportantUrgentItemsComponent', () => {
  let component: ImportantUrgentItemsComponent;
  let fixture: ComponentFixture<ImportantUrgentItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportantUrgentItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportantUrgentItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
