import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkGraphComponentComponent } from './network-graph-component.component';

describe('NetworkGraphComponentComponent', () => {
  let component: NetworkGraphComponentComponent;
  let fixture: ComponentFixture<NetworkGraphComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkGraphComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkGraphComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
