import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventCategoriesComponent } from './event-categories/event-categories.component';
import { EventListComponent } from './event-list/event-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'event-categories', pathMatch: 'full' },
  { path: 'event-categories', component: EventCategoriesComponent },
  { path: 'event-list', component: EventListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
