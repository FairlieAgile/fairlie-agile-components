import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from "@fairlie-agile-components/ui/material";
import { DevContainerComponent } from './dev-container.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    DevContainerComponent
  ],
  exports: [
    DevContainerComponent
  ],
})
export class UiDevContainerModule { }
