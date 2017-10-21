import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoImportantUrgentItemsComponent } from './no-important-urgent-items.component';

describe('NoImportantUrgentItemsComponent', () => {
  let component: NoImportantUrgentItemsComponent;
  let fixture: ComponentFixture<NoImportantUrgentItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoImportantUrgentItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoImportantUrgentItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
