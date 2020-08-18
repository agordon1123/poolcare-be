import { Component } from '@angular/core';
import { CustomerService } from './views/customer/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [CustomerService]
})
export class AppComponent {
  title = 'poolcare-client';
}
