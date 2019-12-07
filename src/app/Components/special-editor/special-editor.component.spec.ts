import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialEditorComponent } from './special-editor.component';

describe('SpecialEditorComponent', () => {
  let component: SpecialEditorComponent;
  let fixture: ComponentFixture<SpecialEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
