import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fa-row',
  template: `
  <div>
    <ng-content></ng-content>
  </div>

  `,
  styleUrls: ['./row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RowComponent { }
