import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  // value : any[] = [{
  //   "home": "Home",
  //   "applications": "Applications",
  //   "workItems": "WorkItems",
  //   "policies": "Policies",
  //   "supportTicket": "SupportTicket",
  // }]
  home: any = 'Home';
  applications: any = 'Applications';
  workItems: any = 'WorkItems';
  policies:any = 'Policies';
  supportTicket:any = "SupportTicket";

  constructor(private dataSharing: DataSharingService) {
    this.dataSharing.SharingData.subscribe((res: any) => {
      this.home = res;
    });

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
