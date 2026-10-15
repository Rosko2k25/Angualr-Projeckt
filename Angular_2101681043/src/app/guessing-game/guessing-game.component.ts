import { Component, signal,OnInit } from '@angular/core';


@Component({
  selector: 'app-guessing-game',
  imports: [],
  templateUrl: './guessing-game.component.html',
  styleUrl: './guessing-game.component.scss'
})
export class GuessingGameComponent implements OnInit {
  curentNumber = signal<number>(0);
  nextNumber = signal<number>(0);
  score= signal<number>(0);
  finalScore= signal<number>(0);
  ngOnInit(){
    this.newGame()
  }
  newGame(){
  this.curentNumber = signal<number>(Math.floor(Math.random() * 100) + 1);
  this.nextNumber = signal<number>(Math.floor(Math.random() * 100) + 1);
  this.score= signal<number>(0);
  this.finalScore= signal<number>(0);
  }
  guessIsHigher(){
    if(this.curentNumber<this.nextNumber){
      this.finalScore.update(val => val + 1);
      this.score.update(val => val + 1);
      this.curentNumber.set(this.nextNumber());
      this.nextNumber.set(Math.floor(Math.random() * 100) + 1);
    }else{
      this.score.set(0);
      this.curentNumber.set(0);
    }
  }
  guessIsLower(){
    if(this.curentNumber>this.nextNumber){
      this.score.update(val => val + 1);
      this.finalScore.update(val => val + 1);
      this.curentNumber.set(this.nextNumber());
      this.nextNumber.set(Math.floor(Math.random() * 100) + 1);
    }else{
      this.score.update(val => 0);
      this.curentNumber.set(0);
      this.nextNumber.set(0);
    }
  }
}
