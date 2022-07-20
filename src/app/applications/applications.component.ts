import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css'],
})
export class ApplicationsComponent implements OnInit {
  applicationComponent: any = 'Applications';
  constructor(private dataSharing: DataSharingService) {
    this.dataSharing.SharingData.subscribe((res: any) => {
      this.applicationComponent = res;
    });
  }

  onSubmit(data: any) {
    this.dataSharing.SharingData.next(data.value);
  }

  ngOnInit(): void {}
}
