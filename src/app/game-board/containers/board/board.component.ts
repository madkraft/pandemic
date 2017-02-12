import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'board',
  template: `
    <div>
      <h1>Infection Deck</h1>
      <card-deck 
        [cards]="infectionCards"
        (currentCard)="currentInfectionCard = $event">
      </card-deck>

      <h1>Play Deck</h1>
      <card-deck [cards]="playCards"></card-deck>

      <world
        [places]="infectionCards"
        [currentlyInfecting]="currentInfectionCard">
      </world>
    </div>
  `,
  styleUrls: ['./board.component.scss']
})

export class BoardComponent implements OnInit {
  infectionCards;
  playCards;
  currentInfectionCard;

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
  }
}
