import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerReactiveFormsComponent } from './customer-reactive-forms.component';

describe('CustomerReactiveFormsComponent', () => {
  let component: CustomerReactiveFormsComponent;
  let fixture: ComponentFixture<CustomerReactiveFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerReactiveFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
