import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent implements OnInit {
  title : Observable<string> | undefined;

  constructor(private dataSharing: DataSharingService) {  }

  ngOnInit(): void { 
    console.log("ngoninit",this.title);
    this.title = this.dataSharing.getTitle();
    // this.dataSharing.getTitle().subscribe(title => {
    //   this.title = title;
    //   console.log("title",this.title);
    // });
  }

 
}
