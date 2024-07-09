import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string= 'ironman';
  public age:number = 45;

  get capitalizeName():string{
    return this.name.toUpperCase();

  }


  get getHeroDescription():string{
    return `${this.name}-${this.age}`;
  }


  changeHero(): void{
    this.name = 'Spiderman';

  }

  changeAge(): void{

    this.age = 17;

  }

  resetForm():void{

      this.name = 'iroman';
      this.age = 45;

  }



}
