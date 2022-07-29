import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-work-items',
  templateUrl: './work-items.component.html',
  styleUrls: ['./work-items.component.css'],
})
export class WorkItemsComponent implements OnInit {
 
  constructor(private dataSharing: DataSharingService) {}

  ngOnInit(): void {
    this.dataSharing.setTitle('Work Items');
  }
}
