import { Component, Input, OnChanges } from '@angular/core';


@Component({
  selector: 'world',
  template: `
    <div class="world">
      <h2>Cities</h2>
      <div *ngFor="let place of places">
        {{ place.city }} infection level: {{ place.infectionLevel || 0 }}
      </div>
    </div>
  `,
  styleUrls: ['./world.component.scss']
})

export class WorldComponent implements OnChanges {
  @Input() places = [];
  @Input() currentlyInfecting;

  ngOnChanges (changes) {
    this.raiseInfectionLevel(changes.currentlyInfecting.currentValue)
  }

  raiseInfectionLevel (card) {
    const newLevel = card.infectionLevel + 1 || 1;
    this.places = this.places.map(infCard => (
      infCard.city === card.city
        ? Object.assign(infCard, {infectionLevel: newLevel})
        : infCard
    ));
  }
}
