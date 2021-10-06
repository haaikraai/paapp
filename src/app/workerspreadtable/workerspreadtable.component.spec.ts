import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerspreadtableComponent } from './workerspreadtable.component';

describe('WorkerspreadtableComponent', () => {
  let component: WorkerspreadtableComponent;
  let fixture: ComponentFixture<WorkerspreadtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkerspreadtableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerspreadtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
