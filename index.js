/**
 * Created by slashhuang on 16/10/8.
 */
import Rx from 'rxjs/Rx';


/**
 * Purity

 What makes RxJS powerful is its ability to produce values using pure functions.
 That means your code is less prone for errors.
 * @type {Element}
 */

var button = document.querySelector('button');
Rx.Observable.fromEvent(button, 'click')
    .scan(count => count + 1, 0)
    .subscribe(count => console.log(`Clicked ${count} times`));

/**
 * Flow

 RxJS has a whole range of operators that helps you control how the events flow through your observables.
 * @type {Element}
 */
var _button = document.getElementsByClassName('button-flow')[0];

debugger;
Rx.Observable.fromEvent(_button, 'click')
    .throttle(1000)
    .scan(count => count + 1, 0)
    .subscribe(count => console.log('Clicked ${count} times'));