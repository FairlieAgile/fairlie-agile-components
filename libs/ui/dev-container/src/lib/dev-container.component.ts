import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'fa-dev-container',
  template: `
    <p>
      dev-container works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DevContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
