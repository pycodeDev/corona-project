import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KontakComponent } from './kontak.component';

describe('KontakComponent', () => {
  let component: KontakComponent;
  let fixture: ComponentFixture<KontakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KontakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KontakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
