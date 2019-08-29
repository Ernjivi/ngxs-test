import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { customerReducer } from './customer.reducer';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({customers: customerReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
