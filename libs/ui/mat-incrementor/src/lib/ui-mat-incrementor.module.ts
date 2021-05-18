import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from "@fairlie-agile-components/ui/material";
import { MatIncrementorComponent } from './mat-incrementor.component';

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule],
  declarations: [
    MatIncrementorComponent
  ],
  exports: [
    MatIncrementorComponent
  ]
})
export class UiMatIncrementorModule { }
