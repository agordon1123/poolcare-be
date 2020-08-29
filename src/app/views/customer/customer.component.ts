import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Customer } from './types';

@Component({
  selector: 'app-customers',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.sass'],
  // providers: [CustomerService]
})
  // export class CustomerComponent implements OnInit {
  export class CustomerComponent implements OnInit, ControlValueAccessor {

  customers: Array<Customer> = [];
  selectedCustomer: Customer;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getCustomers()
  }

  getCustomers() {
    this.customerService.getCustomersByCompanyId({companyId:JSON.parse(localStorage.getItem('config'))['companyId']}).subscribe((res: any) => {
      this.customers = res
      if (res.length > 0) {
        this.selectedCustomer = res[0]
      }
    })
  }

  selectCustomer(customer: Customer) {
    this.selectedCustomer = customer;
  }

  writeValue(value) { }

  registerOnChange(fn) { }

  registerOnTouched(fn) { }

}
