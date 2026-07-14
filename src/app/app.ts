import { InfoComponent } from './components/info/info.component';
import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkActive } from '@angular/router';
import { NavComponent } from "./components/nav/nav.component";
import { Skills } from './components/skills/skills';
import { Projects } from "./components/projects/projects";
import { MailForm } from "./components/mail-form/mail-form";
import { Footer } from "./components/footer/footer";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, InfoComponent, Skills, Projects, MailForm, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('LorenzDevPortfolio');
}
