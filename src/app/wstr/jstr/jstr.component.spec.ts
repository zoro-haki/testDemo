import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JstrComponent } from './jstr.component';

describe('JstrComponent', () => {
  let component: JstrComponent;
  let fixture: ComponentFixture<JstrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JstrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JstrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
