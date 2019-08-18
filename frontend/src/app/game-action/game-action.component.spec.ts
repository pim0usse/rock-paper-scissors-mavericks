import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameActionComponent } from './game-action.component';
import { GameActions } from './gameActions';

describe('GameActionComponent', () => {
  let component: GameActionComponent;
  let fixture: ComponentFixture<GameActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('playerAction', () => {
    it('should update player action to ROCK', () => {
      const selectedAction: GameActions = GameActions.ROCK;
      // act
      component.selectPlayerAction(selectedAction);
      // assert
      expect(component.playerAction).toBe(GameActions.ROCK);
    });

    it('should update player action to PAPER', () => {
      // act
      component.selectPlayerAction(GameActions.PAPER);
      // assert
      expect(component.playerAction).toBe(GameActions.PAPER);
    });

    it('should update player action to SCISSORS', () => {
      // act
      component.selectPlayerAction(GameActions.SCISSORS);
      // assert
      expect(component.playerAction).toBe(GameActions.SCISSORS);
    });

    it('should not update player action when invalid action', () => {
      // arrange
      component.playerAction = GameActions.ROCK;
      const invalidAction = undefined;
      // act
      component.selectPlayerAction(invalidAction);
      // assert
      expect(component.playerAction).toBe(GameActions.ROCK);
    });

  });
});
