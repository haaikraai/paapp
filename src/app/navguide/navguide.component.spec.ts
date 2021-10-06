import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavguideComponent } from './navguide.component';

describe('NavguideComponent', () => {
  let component: NavguideComponent;
  let fixture: ComponentFixture<NavguideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavguideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavguideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
