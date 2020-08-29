import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './shared/nav/nav.component';
import { CustomerComponent } from './views/customer/customer.component';
import { HomeComponent } from './views/home/home.component';
import { WorkOrdersComponent } from './views/work-orders/work-orders.component';
import { ScheduleComponent } from './views/schedule/schedule.component';
import { InventoryComponent } from './views/inventory/inventory.component';
import { AdminComponent } from './views/admin/admin.component';
import { CustomerDetailsComponent } from './views/customer/customer-details/customer-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    CustomerComponent,
    HomeComponent,
    WorkOrdersComponent,
    ScheduleComponent,
    InventoryComponent,
    AdminComponent,
    CustomerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
