import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}}</h3>
  <button (click)="this.increaseBy(1)">+1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="this.increaseBy(-1)">-1</button>




  `,

})
export class CounterComponent{

  counter:number = 10;
  constructor() {}

  increaseBy(value: number):void{
    this.counter += value;
  }

  reset():void{
    this.counter = 10;
  }



}
