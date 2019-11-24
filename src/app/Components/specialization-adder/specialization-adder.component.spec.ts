import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializationAdderComponent } from './specialization-adder.component';

describe('SpecializationAdderComponent', () => {
  let component: SpecializationAdderComponent;
  let fixture: ComponentFixture<SpecializationAdderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecializationAdderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecializationAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
