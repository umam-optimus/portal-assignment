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
import { TabsComponent } from './tabs/tabs.component'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { MatTableModule } from '@angular/material/table'  
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { AssignedTicketsTabComponent } from './assigned-tickets-tab/assigned-tickets-tab.component';
import { DepartmentTabComponent } from './department-tab/department-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideNavbarComponent,
    HomeComponent,
    ApplicationsComponent,
    WorkItemsComponent,
    PoliciesComponent,
    SupportTicketComponent,
    TabsComponent,
    AssignedTicketsTabComponent,
    DepartmentTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTabsModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
