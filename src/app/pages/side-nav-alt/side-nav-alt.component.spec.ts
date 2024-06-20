import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavAltComponent } from './side-nav-alt.component';

describe('SideNavAltComponent', () => {
  let component: SideNavAltComponent;
  let fixture: ComponentFixture<SideNavAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideNavAltComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideNavAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
