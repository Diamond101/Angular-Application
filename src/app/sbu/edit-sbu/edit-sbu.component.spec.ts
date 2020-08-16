import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSbuComponent } from './edit-sbu.component';

describe('EditSbuComponent', () => {
  let component: EditSbuComponent;
  let fixture: ComponentFixture<EditSbuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSbuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSbuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
