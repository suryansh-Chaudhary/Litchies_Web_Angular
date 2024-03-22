import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/Service/communication.service';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css'],
})
export class ShopsComponent implements OnInit {
  constructor(private _communicationService: CommunicationService) {
    alert(_communicationService.shopId);
  }
  ngOnInit() {
    this._communicationService.dataChangedEvent.subscribe((data) => {
      alert('Received data:' + data);
    });
  }
}
