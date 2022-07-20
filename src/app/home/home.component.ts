import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title: string | undefined;
  homeComponent: any = 'Home';
  constructor(private dataSharing: DataSharingService) {
    this.dataSharing.SharingData.subscribe((res: any) => {
      this.homeComponent = res;
    });
  }
  
  onSubmit(data: any) {
    this.dataSharing.SharingData.next(data.value);
  }

  ngOnInit(): void {}
  // clickEvent() {
  //   this.title ="Home";
  //   return this.title;
  // }
}
