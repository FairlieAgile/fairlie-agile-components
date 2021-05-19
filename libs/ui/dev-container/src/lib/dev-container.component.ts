import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fa-dev-container',
  template: `
  <mat-toolbar [color]="'accent'" *ngIf="!isProduction">
    <span>{{siteTitle}}</span>
  </mat-toolbar>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DevContainerComponent implements OnInit {
  @Input() isProduction: boolean = true;
  @Input() siteTitle: string = "Production";

  constructor() { }

  ngOnInit(): void {
  }

}
