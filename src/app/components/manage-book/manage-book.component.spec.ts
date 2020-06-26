import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBookComponent } from './manage-book.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ReactiveFormsModule } from '@angular/forms';

describe('ManageBookComponent', () => {
  let component: ManageBookComponent;
  let fixture: ComponentFixture<ManageBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgMultiSelectDropDownModule,
        ReactiveFormsModule
      ],
      declarations: [ ManageBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
