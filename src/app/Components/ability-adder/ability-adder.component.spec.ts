import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityAdderComponent } from './ability-adder.component';

describe('AbilityAdderComponent', () => {
  let component: AbilityAdderComponent;
  let fixture: ComponentFixture<AbilityAdderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbilityAdderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilityAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
