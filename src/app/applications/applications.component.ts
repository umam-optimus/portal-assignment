import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css'],
})
export class ApplicationsComponent implements OnInit {

  constructor(private dataSharing: DataSharingService) {
  }

  ngOnInit(): void {
    this.dataSharing.setTitle('Applications');
  }
}
