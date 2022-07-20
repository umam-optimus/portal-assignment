import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent implements OnInit {
  home: any= 'Home';
  applications: any = 'Applications';
  workItems: any = 'Work Items';
  policies:any = 'Policies';
  supportTicket:any = "Support Ticket";
  // openSideNav = false;
  // constructor(private titleService: Title) { }

  // ngOnInit(): void {
  // }

  // pageTitle(title: string) {
  //   this.titleService.setTitle(title);
  // }
  constructor(private dataSharing: DataSharingService) {
    this.dataSharing.SharingData.subscribe((res:any) => {
      this.applications = res;
    })
    this.dataSharing.SharingData.subscribe((res1: any) => {
      this.workItems = res1;
    });

    this.dataSharing.SharingData.subscribe((res2: any) => {
      this.policies = res2;
    })

    this.dataSharing.SharingData.subscribe((res3: any) => {
      this.supportTicket = res3;
    })

  }

  onSubmit(data: any) {
    this.dataSharing.SharingData.next(data.value);
  }


  ngOnInit(): void {
  }
 
}
