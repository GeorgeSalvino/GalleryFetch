import { Component, OnInit, Input } from '@angular/core';
import { FetchImageServiceService } from '../fetch-image-service.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})
export class ContentComponent implements OnInit {

  constructor() { }

  @Input() recebeImagem;

  ngOnInit(): void {
  }


}
