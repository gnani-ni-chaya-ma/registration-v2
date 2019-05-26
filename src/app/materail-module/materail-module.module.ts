import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatGridListModule,
  MatRippleModule,
  MatDividerModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatTooltipModule,
  MatCardModule,
  MatBottomSheetModule,
  MatMenuModule,
  MatListModule
} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatGridListModule,
    MatRippleModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    MatBottomSheetModule,
    MatMenuModule,
    MatListModule
  ],
  exports: [
    MatGridListModule,
    MatRippleModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    MatBottomSheetModule,
    MatMenuModule,
    MatListModule
  ]
})
export class MaterailModule { }
