import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatPointSelectorComponent } from './stat-point-selector.component';

describe('StatPointSelectorComponent', () => {
  let component: StatPointSelectorComponent;
  let fixture: ComponentFixture<StatPointSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatPointSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatPointSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
