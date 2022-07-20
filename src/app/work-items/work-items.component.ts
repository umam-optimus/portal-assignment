import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-work-items',
  templateUrl: './work-items.component.html',
  styleUrls: ['./work-items.component.css'],
})
export class WorkItemsComponent implements OnInit {
  workItems: any = 'Work Items';
  constructor(private dataSharing: DataSharingService) {
    this.dataSharing.SharingData.subscribe((res: any) => {
      this.workItems = res;
    });
  }

  onSubmit(data: any) {
    this.dataSharing.SharingData.next(data.value);
  }

  ngOnInit(): void {}
}
