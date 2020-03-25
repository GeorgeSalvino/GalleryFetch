import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterImageCardService {

  indexCarousel = new EventEmitter();
  cardEmitter = new EventEmitter();

  constructor() { }

  emitCard(images) {
    console.log('oiiiiiiiiiiiiiii')
    this.cardEmitter.next(images);
    console.log('depois de emitir')
  }

  emitIndexCarousel(i) {
    this.indexCarousel.emit(i);
  }
}
