import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// import { BatteryService } from './tesla-battery.service';

import { BoardComponent } from './containers/board/board.component';
import { CardDeckComponent } from './components/card-deck/card-deck.component';
import { WorldComponent } from './components/world/world.component';
import { CardsOnHandComponent } from './components/cards-on-hand/cards-on-hand.component';


@NgModule({
  declarations: [
    BoardComponent,
    CardDeckComponent,
    WorldComponent,
    CardsOnHandComponent
  ],
  imports: [
    CommonModule,
    // ReactiveFormsModule
  ],
  providers: [
    // BatteryService
  ],
  exports: [
    BoardComponent
  ]
})

export class GameBoardModule {}
