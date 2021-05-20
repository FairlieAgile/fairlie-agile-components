import {
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'fa-dev-banner',
  template: `
    <mat-toolbar [color]="'accent'" *ngIf="!isProduction">
      <span>{{ siteTitle }}</span>
    </mat-toolbar>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DevBannerComponent {
  @Input() isProduction = true;
  @Input() siteTitle = 'Production';
}
