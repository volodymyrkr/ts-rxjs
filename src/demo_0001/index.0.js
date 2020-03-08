import {Observable} from "rxjs";

var stream$ = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
});

stream$.subscribe((value) => {
  console.log(`value=${value}`);
});