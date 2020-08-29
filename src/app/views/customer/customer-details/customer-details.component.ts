import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../types';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.sass']
})
export class CustomerDetailsComponent implements OnInit {

  @Input() customer: Customer
  tabs: String[] = ['Details', 'Equipment', 'Logs']

  constructor() { }

  ngOnInit(): void { }

}
