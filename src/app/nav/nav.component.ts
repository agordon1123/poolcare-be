import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {

  constructor() { }

  tabs:String[] = ['Home', 'Search', 'Customers', 'Work Orders', 'Inventory', 'Order', 'Settings']

  ngOnInit(): void {
  }

}
