import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  shopId: any = '';
  constructor() {}

  dataChangedEvent = new EventEmitter<any>();

  sendData(data: any) {}
}
