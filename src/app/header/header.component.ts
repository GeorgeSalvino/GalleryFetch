import { Component, OnInit } from '@angular/core';
import { OptionsEventEmitterService } from '../options/options-event-emitter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private eventEmitterOptions: OptionsEventEmitterService) { }

  ngOnInit(): void {
  }

  options() {
    console.log('open');
    this.eventEmitterOptions.toggleOptions();
  }

}
