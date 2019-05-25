import { Component, OnInit } from '@angular/core';
import { rippleColors } from '../enums/enums';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-categories',
  templateUrl: './event-categories.component.html',
  styleUrls: ['./event-categories.component.scss']
})
export class EventCategoriesComponent implements OnInit {

  rippleColor = rippleColors.BLUE
  constructor(private router: Router) { }

  ngOnInit() {}

  goToListPage(val: boolean) {
    val ?
      this.router.navigate(['/event-list'], { queryParams: { name: 'Summer camp' } }) :
      this.router.navigate(['/event-list'], { queryParams: { name: 'Yuva camp' } })
  }

}
