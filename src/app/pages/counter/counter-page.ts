import { Component, signal } from "@angular/core";

@Component({
  template: `
    <h2>CounterComponent Page</h2>
    <h1>Counter: {{counter}} </h1>
    <button (click)="increaseBy(1)">+1</button>
  `
})

export class CounterPage {

  counter = 10;

  increaseBy(value: number) {
    this.counter++;
  }
}
