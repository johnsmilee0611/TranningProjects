import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from './customer';

@Component({
  selector: 'pm-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer: Customer= new Customer();

  constructor() { }

  ngOnInit() {
  }

  save(customerForm: NgForm) {
      console.log(customerForm.form);
      console.log('Saved: ' + JSON.stringify(customerForm.value));
  }

}
