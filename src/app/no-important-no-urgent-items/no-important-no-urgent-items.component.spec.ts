import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoImportantNoUrgentItemsComponent } from './no-important-no-urgent-items.component';

describe('NoImportantNoUrgentItemsComponent', () => {
  let component: NoImportantNoUrgentItemsComponent;
  let fixture: ComponentFixture<NoImportantNoUrgentItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoImportantNoUrgentItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoImportantNoUrgentItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
