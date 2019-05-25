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
  MatMenuModule
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
    MatMenuModule
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
    MatMenuModule
  ]
})
export class MaterailModule { }
