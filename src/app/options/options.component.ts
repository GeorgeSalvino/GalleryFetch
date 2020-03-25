import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OptionsEventEmitterService } from './options-event-emitter.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.sass']
})
export class OptionsComponent implements OnInit {

  constructor(private eventEmitter: OptionsEventEmitterService) { }

  ngOnInit(): void {
  }

  toggleVisibility() {
    this.eventEmitter.toggleOptions();
  }

}
