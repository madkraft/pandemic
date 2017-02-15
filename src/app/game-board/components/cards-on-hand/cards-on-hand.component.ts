import { Component, Input } from '@angular/core';


@Component({
  selector: 'cards-on-hand',
  template: `
    <div class="cards-on-hand row">
      <div 
        *ngFor="let card of cards"
        class="card col-xs"
        [style.background]="card.color"
        (click)="playCard(card)">
        <h4>{{ card.city }}</h4>
      </div>
    </div>
  `,
  styleUrls: ['./cards-on-hand.component.scss']
})

export class CardsOnHandComponent {
  @Input() cards;

  playCard (playedCard) {
    this.cards = this.cards.filter(card => card.city !== playedCard.city);
  }
}
