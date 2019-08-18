import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { GameActionComponent } from './game-action/game-action.component';
import { GameTimerComponent } from './game-timer/game-timer.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    GameActionComponent,
    GameTimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
