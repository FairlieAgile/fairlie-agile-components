import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container.component';
import { RowComponent } from './row.component';
import { ColumnComponent } from './column.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ContainerComponent,
    RowComponent,
    ColumnComponent
  ],
  exports: [
    ContainerComponent,
    RowComponent,
    ColumnComponent
  ],
})
export class LayoutModule {}
