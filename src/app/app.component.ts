import { Component } from '@angular/core';
import { PhotoShowComponent } from "./photo-show/photo-show.component";

@Component({
  selector: 'app-root',
  imports: [PhotoShowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'photos';
}
