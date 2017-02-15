import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'board',
  template: `
    <div>
      <button (click)="nextTurn()">Next turn</button>
      <h3 class="">Current turn: {{ currentTurn.descr }}</h3>
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
          [cards]="playCards"
          (currentCard)="takeCard($event)">
        </card-deck>
      </div>

      <div>
        <cards-on-hand [cards]="playerCards"></cards-on-hand>
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
  gameTurns;
  playerTurns;
  playerCards: Array<any>;

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

    this.gameTurns = [
      {stage: 0, descr: 'Players receive cards'},
      {stage: 1, descr: 'Infecting world'},
    ];

    this.playerTurns = [
      {stage: 0, descr: 'Action (Max. 4)'},
      {stage: 1, descr: 'Draw additional cards'},
      {stage: 2, descr: 'New infections'},
    ];

    this.currentTurn = this.gameTurns[0];

    this.playerCards = [];
  }

  nextTurn () {
    this.currentTurn = this.gameTurns[this.currentTurn.stage + 1] || this.gameTurns[0];
    // this.takeCard();
    // this.checkTurn();
  }

  // checkTurn () {
  //   if (this.currentTurn.stage === ) {
      
  //   } else {
      
  //   }
  // }

  takeCard (card) {
    this.playerCards = [...this.playerCards, card];
    console.log(this.playerCards)
  }
}
