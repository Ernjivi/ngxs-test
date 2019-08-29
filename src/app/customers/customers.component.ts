import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Customer } from '../models/customer';
import { CustomerRemove } from '../customer.actions';



@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customers$: Observable<Customer[]>

  constructor(private store: Store<{customer: Customer[]}>) {
    this.customers$ = store.pipe(select('customers'));
  }

  ngOnInit() {
  }

  removeCustomer(customerIndex: number){
    this.store.dispatch(new CustomerRemove(customerIndex));
  }

}
