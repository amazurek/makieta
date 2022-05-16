import { Component, VERSION } from '@angular/core';
import { Params } from './model/Params';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  params: Params = new Params();
  kod: string = 'BEL 2-01';
  nazwa: string = 'Bełchatów B01';
  kodentsoe: string = '19W000000000017D';
  typ: string = 'Elektrownia cieplna';
  paliwo: string = 'węgiel brunatny';
  napiecie: string = '220';
  kodElektrowni = 'BEL';
  nazwaElektrowni = 'Bełchatów';
  kodEntsoweElektrowni = '19W00011111016F';
  adresElektrowni = '';
  gps = '';
  dataOd = '2022-04-31';
  dataDo = '2022-05-29';

  constructor() {
    this.params.setParams(
      1,
      2,
      3,
      4,
      5,
      3,
      54,
      56,
      3,
      5,
      6,
      3,
      5,
      6,
      43,
      34,
      6,
      76,
      7,
      99
    );
  }

  name = 'Angular ' + VERSION.major;
}
