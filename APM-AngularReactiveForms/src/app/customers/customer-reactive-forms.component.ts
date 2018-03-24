import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

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
  emailMessage: string = '';

  private validationMessages = {
    required: 'Please enter your email address.',
    pattern: 'Please enter a valid email address.'
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      emailGroup: this.fb.group({
        email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]],
        confirmEmail: ['', [Validators.required]],
      }, { validator: validateConfirmEmail }),
      phoneNumber: '',
      notification: 'email',
      rating: ['', ratingRangeWithParams(1, 5)],
      sendCatalog: false,
      addresses: this.fb.array([ this.buildAddress() ]),
    });

    this.customerForm.get('notification').valueChanges
      .subscribe(value => this.setNotification(value));

    const emailControl = this.customerForm.get('emailGroup.email');
    emailControl.valueChanges.debounceTime(1000).subscribe(value => this.setMessage(emailControl));


    // this.customerForm = new FormGroup({
    //   firstName: new FormControl(),
    //   lastName: new FormControl(),
    //   email: new FormControl(),
    //   sendCatalog: new FormControl(true)
    // });
  }

  setMessage(c: AbstractControl): void {
    this.emailMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.emailMessage = Object.keys(c.errors).map(key => this.validationMessages[key]).join(' ');
    }
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

  buildAddress(): FormGroup {
    return this.fb.group({
      addressType: '',
      street1: '',
      street2: '',
      city: '',
      state: '',
      zip: ''
    });
  }

  get addresses(): FormArray{
    return <FormArray>this.customerForm.get('addresses');

  }

  addAddress(): void {
    this.addresses.push(this.buildAddress());
  }
}
