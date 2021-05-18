import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'fa-mat-incrementor',
  template: `
    <p>
      mat-incrementor works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatIncrementorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
