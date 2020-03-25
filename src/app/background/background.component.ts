import { Component, OnInit, Input } from '@angular/core';
import { EventEmitterImageCardService } from '../image-card/event-emitter-image-card.service';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.sass']
})
export class BackgroundComponent implements OnInit {

  constructor(private eventEmitterImageCard: EventEmitterImageCardService) { }

  @Input() recebeImagem;
  indexImage = 0;


  ngOnInit(): void {
    this.eventEmitterImageCard.indexCarousel.subscribe((index) => {
      this.indexImage = index;
    })
  }

}
