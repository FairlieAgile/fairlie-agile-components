import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fa-column',
  template: `
    <ng-content></ng-content>
  `,
  styles: [
    `
      :host {
        display:block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColumnComponent { }
