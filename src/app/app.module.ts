import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgbNav, NgbNavItem, NgbNavLink, NgbNavContent } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './shared/nav/nav.component';
import { CustomerComponent } from './views/customer/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    // NgbModule,
    // NgbNav,
    // NgbNavItem,
    // NgbNavLink,
    // NgbNavContent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
