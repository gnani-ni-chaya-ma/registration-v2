import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';
import { EventListClass } from '../event-list-class';

@Component({
  selector: 'app-event-list-info-bottom-sheet',
  templateUrl: './event-list-info-bottom-sheet.component.html',
  styleUrls: ['./event-list-info-bottom-sheet.component.scss']
})
export class EventListInfoBottomSheetComponent implements OnInit {


  eventData: EventListClass;

  constructor(private bottomSheetRef: MatBottomSheetRef<EventListInfoBottomSheetComponent>) { }

  ngOnInit() {
    this.eventData = this.bottomSheetRef.containerInstance.bottomSheetConfig.data;
  }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
