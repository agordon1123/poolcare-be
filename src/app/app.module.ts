import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbNav, NgbNavItem, NgbNavLink, NgbNavContent } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
