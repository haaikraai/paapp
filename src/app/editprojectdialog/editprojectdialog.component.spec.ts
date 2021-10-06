import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprojectdialogComponent } from './editprojectdialog.component';

describe('EditprojectdialogComponent', () => {
  let component: EditprojectdialogComponent;
  let fixture: ComponentFixture<EditprojectdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditprojectdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprojectdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
