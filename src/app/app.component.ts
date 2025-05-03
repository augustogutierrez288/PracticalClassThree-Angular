import { StudentsPageComponent } from './pages/students-page/students-page.component'; 
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [StudentsPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'practical-class-three';
}
