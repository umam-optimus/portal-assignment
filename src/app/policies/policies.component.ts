import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css'],
})
export class PoliciesComponent implements AfterViewInit {

  constructor(private cdr: ChangeDetectorRef,private dataSharing: DataSharingService) { }

  
  ngAfterViewInit() {
    this.cdr.detectChanges();
    this.dataSharing.setTitle('Policies');
   
  }
}
