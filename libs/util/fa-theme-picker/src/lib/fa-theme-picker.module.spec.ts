import { async, TestBed } from '@angular/core/testing';
import { FaThemePickerModule } from './fa-theme-picker.module';

describe('FaThemePickerModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FaThemePickerModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(FaThemePickerModule).toBeDefined();
  });
});
