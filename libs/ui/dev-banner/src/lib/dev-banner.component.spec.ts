import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DevBannerComponent } from './dev-banner.component';


describe('DevBannerComponent', () => {
  let component: DevBannerComponent;
  let fixture: ComponentFixture<DevBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DevBannerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
