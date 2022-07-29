import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
 
  constructor(private dataSharing: DataSharingService) {}
  
  ngOnInit(): void {
    this.dataSharing.setTitle('Home');
  }
 
}
