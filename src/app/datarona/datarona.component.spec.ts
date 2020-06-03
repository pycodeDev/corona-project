import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataronaComponent } from './datarona.component';

describe('DataronaComponent', () => {
  let component: DataronaComponent;
  let fixture: ComponentFixture<DataronaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataronaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataronaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
