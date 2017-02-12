import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'card-deck',
  template: `
    <div class="card-deck">
      <div 
        class="active-cards card"
        [style.background]="topCard.color"
        (click)="nextCard()">
        <div>{{ topCard.city }}</div>
      </div>
    </div>
  `,
  styleUrls: ['./card-deck.component.scss']
})

export class CardDeckComponent implements OnInit {
  @Input() cards = [];
  topCard;
  cardIndex: number;
  endGame;

  ngOnInit () {
    this.endGame = {
      city: 'You have lost',
      color: 'red'
    };

    this.topCard = this.drawCard();
  }

  drawCard () {
    this.cardIndex = Math.floor(Math.random() * this.cards.length);
    return this.cards[this.cardIndex] || this.endGame;
  }

  removeCard (cards, index) {
    return [
      ...cards.slice(0, index),
      ...cards.slice(index + 1)
    ];
  }

  nextCard () {
    this.cards = this.removeCard(this.cards, this.cardIndex);
    this.topCard = this.drawCard();
  }
}
