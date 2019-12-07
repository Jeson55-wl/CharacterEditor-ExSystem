import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialSheetComponent } from './special-sheet.component';

describe('SpecialSheetComponent', () => {
  let component: SpecialSheetComponent;
  let fixture: ComponentFixture<SpecialSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
