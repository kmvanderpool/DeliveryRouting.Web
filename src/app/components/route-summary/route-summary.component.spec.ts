import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteSummaryComponent } from './route-summary.component';

describe('RouteSummaryComponent', () => {
  let component: RouteSummaryComponent;
  let fixture: ComponentFixture<RouteSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
