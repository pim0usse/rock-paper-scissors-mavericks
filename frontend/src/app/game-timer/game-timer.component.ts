import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { timer, interval, Observable, Subscribable, Subscription } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-game-timer',
    templateUrl: './game-timer.component.html',
    styleUrls: ['./game-timer.component.scss']
})
export class GameTimerComponent implements OnInit {

    count: number;
    source: Observable<number>;
    timer$: Observable<number>;
    counter$: Observable<number>;
    subscribe: Subscription;

    @Output('timeEnd') timeEnd = new EventEmitter<boolean>();

    constructor() {
        this.count = 5;
        this.source = interval(1000);
        this.timer$ = timer(6000);

        this.counter$ = this.source.pipe(
            map(() => this.count--),
            takeUntil(this.timer$)
        );
    
        this.subscribe = this.counter$.subscribe(() => { if (this.count <= 0) { this.timeEnd.emit(true);} });
    }

    ngOnInit() {
        
    }

    

    


}
