import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  shopId: any = '';
  constructor() {}

  dataChangedEvent = new EventEmitter<any>();

  sendData() {
    this.dataChangedEvent.emit();
  }
}
