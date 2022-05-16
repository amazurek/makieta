import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  kod:string = "BEL 2-01";
  nazwa:string = "Bełchatów B01";

  name = 'Angular ' + VERSION.major;
}
