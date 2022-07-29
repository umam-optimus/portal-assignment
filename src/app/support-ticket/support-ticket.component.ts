import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-support-ticket',
  templateUrl: './support-ticket.component.html',
  styleUrls: ['./support-ticket.component.css'],
})
export class SupportTicketComponent implements AfterViewInit {
 
  constructor(private cdr: ChangeDetectorRef,private dataSharing: DataSharingService) {}
  links = ['#100', '#101', '#102'];
  titles = ['Tab A', 'Tab B', 'Tab C'];
  activeLink = this.links[1];
  myColor:any = 'accent';

  ngAfterViewInit() {
    this.dataSharing.setTitle('Support Ticket');
    this.cdr.detectChanges();
  }
}
