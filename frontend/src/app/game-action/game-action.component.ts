import { Component, OnInit } from '@angular/core';
import { GameActions } from './gameActions';

@Component({
  selector: 'app-game-action',
  templateUrl: './game-action.component.html',
  styleUrls: ['./game-action.component.scss']
})
export class GameActionComponent implements OnInit {

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
