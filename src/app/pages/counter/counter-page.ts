import { Component, signal } from "@angular/core";

@Component({
  templateUrl: 'counter-page.html',
  styleUrls: ['counter-page.css']
})

export class CounterPage {

  counter = 10;
  counterSignal = signal(10);

  increase() {

    this.counter++;
    this.counterSignal.update(current => ++current);
  }

  decrease() {
    this.counter--;
    this.counterSignal.update(current => --current);
  }

  reset() {
    this.counter = 10;
    this.counterSignal.set(0);
  }
}
