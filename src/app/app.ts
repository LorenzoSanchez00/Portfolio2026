import { InfoComponent } from './components/info/info.component';
import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkActive } from '@angular/router';
import { NavComponent } from "./components/nav/nav.component";
import { Skills } from './components/skills/skills';
import { Projects } from "./components/projects/projects";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, InfoComponent, Skills, Projects],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('LorenzDevPortfolio');
}
