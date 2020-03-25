import { Component, OnInit, Input } from '@angular/core';
import { FetchImageServiceService } from '../fetch-image-service.service';
import { EventEmitterImageCardService } from './event-emitter-image-card.service';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.sass']
})
export class ImageCardComponent implements OnInit {

  constructor(private fetchImage: FetchImageServiceService, private eventEmitterImageCard: EventEmitterImageCardService) { }

  @Input() cardImage;

  images;

  ngOnInit(): void {
    this.eventEmitterImageCard.cardEmitter.subscribe(images => {
      console.log('recebeu emissao');
    })
    console.log('init')
  }

  emitIndex(i) {
    this.eventEmitterImageCard.emitIndexCarousel(i);
  }



}
