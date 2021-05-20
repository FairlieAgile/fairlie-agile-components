import { async, TestBed } from '@angular/core/testing';
import { FaTenantModule } from './fa-tenant.module';

describe('FaTenantModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FaTenantModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(FaTenantModule).toBeDefined();
  });
});
