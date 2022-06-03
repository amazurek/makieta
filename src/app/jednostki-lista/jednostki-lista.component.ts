import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jednostki-lista',
  templateUrl: './jednostki-lista.component.html',
  styleUrls: ['./jednostki-lista.component.css'],
})
export class JednostkiListaComponent implements OnInit {
  jadnTbl = [];
  fieldName:string = 'param7';
  fieldName2:string = 'par1';


  

  constructor() {
    this.jadnTbl[0] = { param1: 'Bełchatów B02', param2: '19W000000000017D', param3:'Jednostka cieplna',param4:'węgiel brunatny', param5:'BEL' , param6:'Bełchatów' };
    this.jadnTbl[0] = { param1: 'Bełchatów B02', param2: '19W000000000017D', param3:'Jednostka cieplna',param4:'węgiel brunatny', param5:'BEL' , param6:'Bełchatów', param7:{par1:'adam'} };
  }

  ngOnInit() {}
}
