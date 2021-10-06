import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpreadtableComponent } from './spreadtable.component';

describe('SpreadtableComponent', () => {
  let component: SpreadtableComponent;
  let fixture: ComponentFixture<SpreadtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpreadtableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpreadtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
