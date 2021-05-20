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
  @Output() valueChanged = new EventEmitter<number>();

  myFormGroup = new FormGroup({
    formField: new FormControl()
  });

  _value = 0;
  private _step = 1;
  private _min = 0;
  private _max = Infinity;
  private _wrap = false;
  private _color = 'default';

  @Input()
  set value(_value: number) {
    this._value = _value;
  }

  @Input()
  set step(_step: number) {
    this._step = _step;
  }

  @Input()
  set min(_min: number) {
    this._min = _min;
  }

  @Input()
  set max(_max: number) {
    this._max = _max;
  }

  @Input()
  set wrap(_wrap: boolean) {
    this._wrap = _wrap;
  }

  validate(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = this.parseNumber(input.value)
    if (value > this._max) {
      this._value = this._max;
    }
    this.valueChanged.emit(this._value);
  }

  private parseNumber(input: string | number): number {
    if (!input) return NaN;

    if (typeof input === 'string' && input.trim().length == 0) {
      return NaN;
    }
    return Number(input);
  }

  decrementValue(): void {
    this._value -= this._step;
    if (this._wrap) {
      this.wrapValue();
    }
    this.valueChanged.emit(this._value);
  }

  incrementValue(): void {
    this._value += this._step;
    if (this._wrap) {
      this.wrapValue();
    }
    this.valueChanged.emit(this._value);
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
