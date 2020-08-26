import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './views/customer/customer.component';
import { HomeComponent } from './views/home/home.component';
import { WorkOrdersComponent } from './views/work-orders/work-orders.component';
import { ScheduleComponent } from './views/schedule/schedule.component';
import { InventoryComponent } from './views/inventory/inventory.component';
import { AdminComponent } from './views/admin/admin.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'customers',
    component: CustomerComponent
  },
  {
    path: 'work-orders',
    component: WorkOrdersComponent
  },
  {
    path: 'schedule',
    component: ScheduleComponent
  },
  {
    path: 'inventory',
    component: InventoryComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
