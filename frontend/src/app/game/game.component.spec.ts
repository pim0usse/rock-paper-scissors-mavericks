import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameComponent } from './game.component';
import { GameActions } from './gameActions';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('userAction', () => {
    it('should update player action to ROCK', () => {
      // act
      component.selectPlayerAction(GameActions.ROCK);
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

  });
  
});
