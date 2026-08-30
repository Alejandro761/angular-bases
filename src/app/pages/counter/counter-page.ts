import { Component, signal } from "@angular/core";

@Component({
  templateUrl: 'counter-page.html',
  styleUrls: ['counter-page.css']
})

export class CounterPage {

  counter = 10;

  increase() {
    this.counter++;
  }
  decrease() {
    this.counter--;
  }
  reset() {
    this.counter = 10;
  }
}
