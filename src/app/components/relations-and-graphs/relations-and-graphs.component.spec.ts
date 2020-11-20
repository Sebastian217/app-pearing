import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationsAndGraphsComponent } from './relations-and-graphs.component';

describe('RelationsAndGraphsComponent', () => {
  let component: RelationsAndGraphsComponent;
  let fixture: ComponentFixture<RelationsAndGraphsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelationsAndGraphsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationsAndGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
