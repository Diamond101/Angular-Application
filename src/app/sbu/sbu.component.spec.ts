import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SBUComponent } from './sbu.component';

describe('SBUComponent', () => {
  let component: SBUComponent;
  let fixture: ComponentFixture<SBUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SBUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SBUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
