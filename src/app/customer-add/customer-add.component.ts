import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Customer } from '../models/customer';
import { CustomerAdd } from '../customer.actions';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {

  customers: Observable<Customer[]>;

  constructor(private store: Store<{customers: Customer[]}>) {
    this.customers = store.pipe(select('customers'));
  }

  ngOnInit() {
  }

  addCustomer(customerName: string){
    const customer = new Customer();
    customer.name = customerName;
    this.store.dispatch(new CustomerAdd(customer));
  }

}
