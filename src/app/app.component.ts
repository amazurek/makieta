import { Component, VERSION } from '@angular/core';
import { Params } from './model/Params';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  

  name = 'Angular ' + VERSION.major;
}
