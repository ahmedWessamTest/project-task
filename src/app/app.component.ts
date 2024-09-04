import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlackLayoutComponent } from "./layout/black-layout/black-layout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BlackLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project-1';
}
