import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  kod:string = "BEL 2-01";
  nazwa:string = "Bełchatów B01";
  kodentsoe:string = "19W000000000017D";
  typ:string = "Elektrownia cieplna";
  paliwo:string = "węgiel brunatny";
  kodElektrowni = "BEL";
  nawzaElektrowni = "BEL";
  kodEntsoweElektrowni = "19W000000000016F";
  adresElektrowni = "";
  gps = "";




  name = 'Angular ' + VERSION.major;
}
