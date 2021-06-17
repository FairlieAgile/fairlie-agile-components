import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'fa-container',
  template: `
  <div>
    <ng-content></ng-content>
  </div>
  `,
  styleUrls: ['./container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerComponent {
  @Input() @HostBinding('attr.data-full') full: boolean = false;

  constructor() { }
}
