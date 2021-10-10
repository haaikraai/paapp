import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerSpreadtableComponent } from './workerspreadtable.component';

describe('WorkerspreadtableComponent', () => {
  let component: WorkerSpreadtableComponent;
  let fixture: ComponentFixture<WorkerSpreadtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkerSpreadtableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerSpreadtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
