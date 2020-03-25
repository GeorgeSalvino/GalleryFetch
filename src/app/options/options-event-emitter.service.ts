import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OptionsEventEmitterService {

  constructor() { }

  @Output() close: EventEmitter<any> = new EventEmitter();
  @Output() open: EventEmitter<any> = new EventEmitter();

  toggleOptions() {
    this.close.emit(null);
    console.log("no service")
  }

  openOptions() {
    this.open.emit(null);
  }
}
