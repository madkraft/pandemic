import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'board',
  template: `
    <div>
      <button (click)="nextTurn()">Next turn</button>
      <h1>Current turn: {{ currentTurn.descr }}</h1>
      <div class="row">
        <card-deck
          class="col-xs-12" 
          [cards]="infectionCards"
          (currentCard)="currentInfectionCard = $event">
        </card-deck>
      </div>

      <div class="row">
        <world
          class="col-xs-12"
          [places]="infectionCards"
          [currentlyInfecting]="currentInfectionCard">
        </world>
      </div>

      <div class="row">
        <card-deck 
          class="col-xs-12"
          [cards]="playCards">
        </card-deck>
      </div>
    </div>
  `,
  styleUrls: ['./board.component.scss']
})

export class BoardComponent implements OnInit {
  infectionCards;
  playCards;
  currentInfectionCard;
  currentTurn;
  turns;

  ngOnInit () {
    this.infectionCards = [
      {
        city: 'Bangkok',
        color: '#c01025'
      },
      {
        city: 'Mexico',
        color: '#fed024'
      },
      {
        city: 'Mumbai',
        color: '#1e2a2d'
      },
      {
        city: 'Atlanta',
        color: '#1007ed'
      },
      {
        city: 'Osaka',
        color: '#c01025'
      }
    ];

    this.playCards = [
      {
        city: 'Shanghai',
        color: '#c01025'
      },
      {
        city: 'Buenos Aires',
        color: '#fed024'
      },
      {
        city: 'Moscow',
        color: '#1e2a2d'
      },
      {
        city: 'New York',
        color: '#1007ed'
      },
      {
        city: 'Seul',
        color: '#c01025'
      }
    ];

    this.turns = [
      {turn: 0, descr: 'Players receive cards'},
      {turn: 1, descr: 'Infecting world'}
    ];

    this.currentTurn = this.turns[0];
  }

  nextTurn () {
    this.currentTurn = this.turns[this.currentTurn.turn + 1] || this.turns[0];
  }
}
