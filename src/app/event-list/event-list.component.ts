import { Component, OnInit, Renderer, ElementRef, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatBottomSheet, MatBottomSheetRef, MatBottomSheetConfig } from '@angular/material';
import { EventListInfoBottomSheetComponent } from './event-list-info-bottom-sheet/event-list-info-bottom-sheet.component';
import { ApiHelperService } from '../api-helper.service';
import { EventListClass } from './event-list-class';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent {

  headerText: string;
  listDetails: Array<EventListClass>;

  constructor(
    private activaterRoute: ActivatedRoute,
    private bottomSheet: MatBottomSheet,
    private router: Router,
    private apiHelper: ApiHelperService,
    private el: ElementRef,
    private renderer: Renderer
  ) {

    this.headerText = this.activaterRoute.snapshot.queryParams.name

    this.apiHelper.getList().subscribe((res: any) => {
      this.listDetails = res
    })


  }

  // @HostListener('mouseenter') onMouseOver() {
  //   let part = this.el.nativeElement.querySelector('.show-info-sheet');
  //   this.renderer.setElementStyle(part, 'visibility', 'visible');
  // }

  // @HostListener('mouseleave') onMouseOut() {
  //   let part = this.el.nativeElement.querySelector('.show-info-sheet');
  //   this.renderer.setElementStyle(part, 'visibility', 'hidden');
  // }


  goBack() {
    this.router.navigateByUrl('/event-categories')
  }

  openBottomSheet(event: EventListClass): void {
    this.bottomSheet.open(EventListInfoBottomSheetComponent, { data: event });
  }
}

