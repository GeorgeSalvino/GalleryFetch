import { Component, OnInit } from "@angular/core";
import { FetchImageServiceService } from "./fetch-image-service.service";
import { OptionsComponent } from "./options/options.component";
import { OptionsEventEmitterService } from "./options/options-event-emitter.service";
import { EventEmitterImageCardService } from "./image-card/event-emitter-image-card.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent implements OnInit {
  title = "GalleryFetch";
  imagem;
  randomImages = [];
  hiddenOptions = true;
  constructor(
    private fetch: FetchImageServiceService,
    private eventEmitterOptions: OptionsEventEmitterService,
    private eventEmitterCard: EventEmitterImageCardService
  ) {}

  ngOnInit(): void {
    this.eventEmitterOptions.close.subscribe(() => {
      this.hiddenOptions = !this.hiddenOptions;
    });

    this.fetch.getRandomImage().subscribe((res: []) => {
      for (let i = 0; i < 3; i++) {
        let random = this.getRandomInt(0, res.length);
        this.randomImages.push(res[random]);
      }

      this.imagem = this.randomImages;
      this.eventEmitterCard.emitCard(this.imagem);
      console.log(this.imagem);
    });
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
