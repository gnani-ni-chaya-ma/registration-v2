import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventListComponent } from './event-list/event-list.component';
import { EventCategoriesComponent } from './event-categories/event-categories.component';
import { MaterailModule } from './materail-module/materail-module.module';
import { EventListInfoBottomSheetComponent } from './event-list/event-list-info-bottom-sheet/event-list-info-bottom-sheet.component';


@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventCategoriesComponent,
    EventListInfoBottomSheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterailModule,
  ],
  exports: [EventListInfoBottomSheetComponent],
  entryComponents: [EventListInfoBottomSheetComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
