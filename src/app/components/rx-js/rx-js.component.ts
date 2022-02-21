import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-rx-js',
  templateUrl: './rx-js.component.html',
  styleUrls: ['./rx-js.component.scss'],
})
export class RxJsComponent {
  sub: Subscription;
  constructor() {
    const stream$ = new Observable((observer) => {
      setTimeout(() => {
        observer.next(1);
      }, 1500);

      setTimeout(() => {
        observer.error('Something wrong!');
      }, 2000);

      setTimeout(() => {
        observer.next(2);
      }, 2500);
    });

    this.sub = stream$.subscribe(
      (value) => console.log('Value', value),
      (error) => console.log('Error', error)
    );
  }

  stop() {
    this.sub.unsubscribe();
  }
}
