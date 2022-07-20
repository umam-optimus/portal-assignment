import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-support-ticket',
  templateUrl: './support-ticket.component.html',
  styleUrls: ['./support-ticket.component.css'],
})
export class SupportTicketComponent implements OnInit {
  supportTicket: any = 'Support Ticket';
  constructor(private dataSharing: DataSharingService) {
    this.dataSharing.SharingData.subscribe((res: any) => {
      this.supportTicket = res;
    });
  }
  
  onSubmit(data: any) {
    this.dataSharing.SharingData.next(data.value);
  }
  ngOnInit(): void {}
}
