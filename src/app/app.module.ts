import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ApplicationsComponent } from './applications/applications.component';
import { WorkItemsComponent } from './work-items/work-items.component';
import { PoliciesComponent } from './policies/policies.component';
import { SupportTicketComponent } from './support-ticket/support-ticket.component';
import { MatTabsModule } from '@angular/material/tabs'; 



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideNavbarComponent,
    HomeComponent,
    ApplicationsComponent,
    WorkItemsComponent,
    PoliciesComponent,
    SupportTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
