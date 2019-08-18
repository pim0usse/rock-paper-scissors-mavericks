import { Component, OnInit } from '@angular/core';
import { GameActions } from './gameActions';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor() { }

  playerAction: GameActions;
  computerAction: GameActions;

  ngOnInit() {
  }

  selectPlayerAction = (action: GameActions) => {
    if (action in GameActions){
      this.playerAction = action;
    }
  }

}
