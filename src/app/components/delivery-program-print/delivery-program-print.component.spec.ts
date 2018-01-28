import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryProgramPrintComponent } from './delivery-program-print.component';

describe('DeliveryProgramPrintComponent', () => {
  let component: DeliveryProgramPrintComponent;
  let fixture: ComponentFixture<DeliveryProgramPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryProgramPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryProgramPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
