import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsPayComponent } from './options-pay.component';

describe('OptionsPayComponent', () => {
  let component: OptionsPayComponent;
  let fixture: ComponentFixture<OptionsPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionsPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
