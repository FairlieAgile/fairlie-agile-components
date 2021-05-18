import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'fa-mat-incrementor',
  template: `
<mat-form-field appearance="outline">
  <button mat-button mat-icon-button matPrefix aria-label="Remove" [color]="getColor()" (click)="decrementValue()"
    [disabled]="canDisableDecrement()">
    <mat-icon>remove</mat-icon>
  </button>
  <input matInput type="number" [(ngModel)]="_value" (focus)="onFocus()" (blur)="onBlur()"
    (change)="validate($event)" />
  <button mat-button mat-icon-button matSuffix aria-label="Add" [color]="getColor()" (click)="incrementValue()"
    [disabled]="canDisableIncrement()">
    <mat-icon>add</mat-icon>
  </button>
</mat-form-field>
  `,
  styleUrls: ['./mat-incrementor.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatIncrementorComponent {
  @Output() change = new EventEmitter<number>();

  myFormGroup = new FormGroup({
    formField: new FormControl()
  });

  _value: number = 0;
  private _step: number = 1;
  private _min: number = 0;
  private _max: number = Infinity;
  private _wrap: boolean = false;
  private _color: string = 'default';

  @Input('value')
  set inputValue(_value: number) {
    this._value = this.parseNumber(_value);
  }

  @Input()
  set step(_step: number) {
    this._step = this.parseNumber(_step);
  }

  @Input()
  set min(_min: number) {
    this._min = this.parseNumber(_min);
  }

  @Input()
  set max(_max: number) {
    this._max = this.parseNumber(_max);
  }

  @Input()
  set wrap(_wrap: boolean) {
    this._wrap = this.parseBoolean(_wrap);
  }

  validate(event: any) {
    let value = this.parseNumber(event.target.value)
    if (value > this._max) {
      this._value = this._max;
    }
    this.change.emit(this._value);
  }

  private parseNumber(num: any): number {
    return +num;
  }

  private parseBoolean(bool: any): boolean {
    return !!bool;
  }

  decrementValue(): void {
    this._value -= this._step;
    if (this._wrap) {
      this.wrapValue();
    }
    this.change.emit(this._value);
  }

  incrementValue(): void {
    this._value += this._step;
    if (this._wrap) {
      this.wrapValue();
    }
    this.change.emit(this._value);
  }

  private wrapValue(): number {
    if (this._value > this._max) {
      return this._min;
    }

    if (this._value < this._min) {

      if (this._max === Infinity) {
        return 0;
      }

      return this._max + this._value;
    }

    return this._value;
  }

  canDisableDecrement(): boolean {
    return !this._wrap && this._value <= this._min;
  }

  canDisableIncrement(): boolean {
    return !this._wrap && this._value >= this._max;
  }

  onFocus() {
    this.setColor('primary');
  }

  onBlur() {
    this.setColor('default');
  }

  getColor(): ThemePalette {
    return this._color as ThemePalette
  }

  private setColor(color: string): void {
    this._color = color;
  }
}
