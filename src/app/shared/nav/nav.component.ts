import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  tabs:String[] = ['Home', 'Customers', 'Work Orders', 'Schedule', 'Inventory', 'Admin']

  ngOnInit(): void {
  }

  changeView = (view: String) => {
    const v =  '/' + view.split(' ').join('-').toLowerCase()
    this.router.navigate([v])
  }

}
