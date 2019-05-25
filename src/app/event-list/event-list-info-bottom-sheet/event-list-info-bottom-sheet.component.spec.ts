import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListInfoBottomSheetComponent } from './event-list-info-bottom-sheet.component';

describe('EventListInfoBottomSheetComponent', () => {
  let component: EventListInfoBottomSheetComponent;
  let fixture: ComponentFixture<EventListInfoBottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventListInfoBottomSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventListInfoBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
