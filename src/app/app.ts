import { Component, signal } from '@angular/core';
import { RouterOutlet,  } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  standalone:true,
  selector: 'app-root',
  imports: [ CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('netflex-website');
}
