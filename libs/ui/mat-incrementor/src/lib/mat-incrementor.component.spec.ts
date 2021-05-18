import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatIncrementorComponent } from './mat-incrementor.component';

describe('MatIncrementorComponent', () => {
  let component: MatIncrementorComponent;
  let fixture: ComponentFixture<MatIncrementorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatIncrementorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatIncrementorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
