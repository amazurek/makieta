import { Component, OnInit } from '@angular/core';
import { Params } from '../model/Params';

@Component({
  selector: 'app-jednostki',
  templateUrl: './jednostki.component.html',
  styleUrls: ['./jednostki.component.css'],
})
export class JednostkiComponent implements OnInit {
  params: Params = new Params();
  kod: string = 'BEL 2-01';
  nazwa: string = 'Bełchatów B01';
  kodentsoe: string = '19W000000000017D';
  typ: string = 'Hydrozespół ESP';
  paliwo: string = 'woda';
  napiecie: string = '220';
  kodElektrowni = 'BEL';
  nazwaElektrowni = 'Bełchatów';
  kodEntsoweElektrowni = '19W00011111016F';
  adresElektrowni = '';
  gps = '';
  dataOd = '2022-04-31';
  dataDo = '2022-05-29';

  edit_global: boolean = true;
  parameters_edit_global: boolean = true;

  public editGlobalParameters() {
    this.parameters_edit_global = !this.parameters_edit_global;
  }

  public editGlobal() {
    this.edit_global = !this.edit_global;
  }

  nowaWersja() {
    this.dataOd = '';
    this.dataDo = '';
  }
  ngOnInit() {}

  www() {
    console.log('XXXXXX');
  }

  constructor() {
    this.params.setParams(
      new Date('2021-01-01'),
      new Date('2021-01-01'),
      'Adam Mazurek',
      new Date('2021-01-01'),
      'Regularna praca',
      'PGE',
      '',
      '',
      '',
      '',
      135,
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
}
