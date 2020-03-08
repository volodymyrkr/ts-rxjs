import {Observable} from "rxjs";

let timeoutForPromise = 5000;

let promise$ = new Observable( subscriber => {
  new Promise(
    (resolve, reject) => {
      setInterval(() => {resolve(timeoutForPromise)}, timeoutForPromise);
    }
  ).then((value) => {
      subscriber.next(value)
    }
  )
});

promise$.subscribe(value => {console.log(`From promise ${value}`)});