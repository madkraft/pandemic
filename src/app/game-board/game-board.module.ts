// import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// import { BatteryService } from './tesla-battery.service';

import { BoardComponent } from './containers/board/board.component';
import { CardDeckComponent } from './components/card-deck/card-deck.component';
// import { TeslaStatsComponent } from './components/tesla-stats/tesla-stats.component';
// import { TeslaCounterComponent } from './components/tesla-counter/tesla-counter.component';
// import { TeslaClimateComponent } from './components/tesla-climate/tesla-climate.component';
// import { TeslaWheelsComponent } from './components/tesla-wheels/tesla-wheels.component';

@NgModule({
  declarations: [
    BoardComponent,
    CardDeckComponent
    // TeslaStatsComponent,
    // TeslaCounterComponent,
    // TeslaClimateComponent,
    // TeslaWheelsComponent
  ],
  imports: [
    // CommonModule,
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
