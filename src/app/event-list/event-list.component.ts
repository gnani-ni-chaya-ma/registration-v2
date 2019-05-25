import { Component, OnInit, Renderer, ElementRef, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { EventListInfoBottomSheetComponent } from './event-list-info-bottom-sheet/event-list-info-bottom-sheet.component';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  headerText: string;

  constructor(
    private activaterRoute: ActivatedRoute,
    private bottomSheet: MatBottomSheet,

    private el: ElementRef,
    private renderer: Renderer
  ) { }

  @HostListener('mouseover') onMouseOver() {
    let part = this.el.nativeElement.querySelector('.show-info-sheet');
    this.renderer.setElementStyle(part, 'visibility', 'visible');
  }

  @HostListener('mouseout') onMouseOut() {
    let part = this.el.nativeElement.querySelector('.show-info-sheet');
    this.renderer.setElementStyle(part, 'visibility', 'hidden');
  }

  ngOnInit() {
    this.headerText = this.activaterRoute.snapshot.queryParams.name
  }

  openBottomSheet(): void {
    this.bottomSheet.open(EventListInfoBottomSheetComponent);
  }
}

