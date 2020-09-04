import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from '../types';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.sass']
})
export class CustomerDetailsComponent implements OnInit {

  @Input() customer: Customer
  @Input() isEditing: boolean
  @Input() isAdding: boolean
  @Output() toggleEditing = new EventEmitter();
  @Output() setCustomer: EventEmitter<Customer> = new EventEmitter();
  tabs: String[] = ['Details', 'Equipment', 'Logs']
  isAddingPool: boolean
  customerToEdit = {}

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void { }

  togEditing() {
    this.toggleEditing.emit()
    this.customerToEdit = {...this.customer}
  }

  toggleIsAddingPool() {
    this.isAddingPool = !this.isAddingPool
  }

  // unsure whether addressEdits or poolEdits is cleaner
  handleAddressEdits(event: any) {
    this.customerToEdit = {
      ...this.customerToEdit,
      address: {
        ...this.customerToEdit['address'],
        [event.target.name]: event.target.value
      }
    }
  }

  handlePoolEdits(event: any) {
    let newCustomerToEdit = {...this.customerToEdit}
    newCustomerToEdit['pool'][event.target.name] = event.target.value
    this.customerToEdit = newCustomerToEdit
  }

  handleSubmit() {
    this.customerService.updateCustomerInformation(this.customerToEdit).subscribe((res: any) => {
      this.customer = res
      this.setCustomer.emit(res)
      this.togEditing()
    }, err => console.log(err))
  }

}
