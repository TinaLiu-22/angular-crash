import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Task Tracker';
}
