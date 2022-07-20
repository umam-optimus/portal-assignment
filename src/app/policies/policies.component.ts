import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css'],
})
export class PoliciesComponent implements OnInit {
  policyComponent: any = 'Policies';
  constructor(private dataSharing: DataSharingService) {
    this.dataSharing.SharingData.subscribe((res: any) => {
      this.policyComponent = res;
    });
  }

  onSubmit(data: any) {
    this.dataSharing.SharingData.next(data.value);
  }
  ngOnInit(): void {}
}
