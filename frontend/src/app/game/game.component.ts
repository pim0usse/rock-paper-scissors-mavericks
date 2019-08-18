import { Component, OnInit } from '@angular/core';
import { GameActionComponent } from '../game-action/game-action.component';
import { GameTimerComponent } from '../game-timer/game-timer.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

}
