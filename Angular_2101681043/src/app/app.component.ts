import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GuessingGameComponent } from "./guessing-game/guessing-game.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GuessingGameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Project';
}
