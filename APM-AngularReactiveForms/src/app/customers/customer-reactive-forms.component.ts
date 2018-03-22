import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

function ratingRange(c: AbstractControl): { [key: string]: boolean } | null {
  if (c.value !== undefined && (isNaN(c.value) || c.value < 1 || c.value > 5)) {
    return { 'range': true };
  }
  return null;
}

function ratingRangeWithParams(min: number, max: number): ValidatorFn {
  return (c: AbstractControl): { [key: string]: boolean } | null => {
    if (c.value !== undefined && (isNaN(c.value) || c.value < 1 || c.value > 5)) {
      return { 'range': true };
    }
    return null;
  };
}

function validateConfirmEmail(c: AbstractControl): { [key: string]: boolean } | null {
  const emailControl = c.get('email');
  const confirmEmailControl = c.get('confirmEmail');

  if (emailControl.pristine || confirmEmailControl.pristine) {
      return null;
  }

  if (emailControl.value !== confirmEmailControl.value) {
    return { 'match': true };
  }
  return null;
}

@Component({
  selector: 'pm-customer-reactive-forms',
  templateUrl: './customer-reactive-forms.component.html',
  styleUrls: ['./customer-reactive-forms.component.css']
})
export class CustomerReactiveFormsComponent implements OnInit {

  customerForm: FormGroup;
  customer: Customer = new Customer();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      availability: this.fb.group({
        email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]],
        confirmEmail: ['', [Validators.required]],
      }, { validator: validateConfirmEmail }),
      phoneNumber: '',
      notification: 'email',
      rating: ['', ratingRangeWithParams(1, 5)],
      sendCatalog: false
    });

    // this.customerForm = new FormGroup({
    //   firstName: new FormControl(),
    //   lastName: new FormControl(),
    //   email: new FormControl(),
    //   sendCatalog: new FormControl(true)
    // });
  }

  save() {
    // console.log(customerForm.form);
    // console.log('Saved: ' + JSON.stringify(customerForm.value));
  }

  populateTestData() {
    this.customerForm.setValue({
      firstName: 'Tung',
      lastName: 'Do',
      email: 'tungdo@gmail.com',
      sendCatalog: false
    });
  }

  populateTestPatchData() {
    this.customerForm.patchValue({
      firstName: 'Tung PATCH',
      lastName: 'Do PATCH',
      sendCatalog: true
    });
  }

  setNotification(notifyVia: string): void {
    const phoneNumberFormControls = this.customerForm.get('phoneNumber');

    if (notifyVia === 'text') {
      phoneNumberFormControls.setValidators(Validators.required);
    } else {
      phoneNumberFormControls.clearValidators();
    }

    phoneNumberFormControls.updateValueAndValidity();
  }
}
