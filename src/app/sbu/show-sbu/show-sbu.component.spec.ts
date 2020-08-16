import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSBUComponent } from './show-sbu.component';

describe('ShowSBUComponent', () => {
  let component: ShowSBUComponent;
  let fixture: ComponentFixture<ShowSBUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSBUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSBUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
