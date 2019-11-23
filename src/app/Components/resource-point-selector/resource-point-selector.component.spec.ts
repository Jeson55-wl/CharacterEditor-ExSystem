import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcePointSelectorComponent } from './resource-point-selector.component';

describe('ResourcePointSelectorComponent', () => {
  let component: ResourcePointSelectorComponent;
  let fixture: ComponentFixture<ResourcePointSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcePointSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcePointSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
