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
      @media only screen and (max-width: 1200px) {
        :host {
          padding: 0 10px;
        }
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColumnComponent { }
