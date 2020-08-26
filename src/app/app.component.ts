import { Component, OnInit } from '@angular/core';
import { CustomerService } from './views/customer/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [CustomerService]
})
export class AppComponent implements OnInit {
  title = 'poolcare-client'
  protected companyId = null

  ngOnInit() {
    // this.companyId = localStorage.getItem('config');
    this.getOnInitParams()
  }

  getOnInitParams() {
    let params = JSON.parse(localStorage.getItem('config'))
    if (params === null) {
      let newParams = {}
      // TODO: hardcoding companyId...Will need to attain from login
      newParams['companyId'] = 2
      this.companyId = newParams['companyId']
      localStorage.setItem('config', JSON.stringify(newParams))
    } else {
      this.companyId = params['companyId']
    }
  }
}
