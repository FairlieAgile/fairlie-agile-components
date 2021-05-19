import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevContainerComponent } from './dev-container.component';

describe('DevContainerComponent', () => {
  let component: DevContainerComponent;
  let fixture: ComponentFixture<DevContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
