import { Component, OnInit } from '@angular/core';
import { MagazynAttr } from '../model/magazyn-attr';

@Component({
  selector: 'app-magazyny',
  templateUrl: './magazyny.component.html',
  styleUrls: ['./magazyny.component.css'],
})
export class MagazynyComponent implements OnInit {
  magazynyTbl: MagazynAttr[] = [];
  selectedMagazyn: MagazynAttr;
  constructor() {}

  ngOnInit() {
    this.magazynyTbl.push(
      new MagazynAttr(
        'Magazyn1',
        '2022-01-02',
        '2023-01-01',
        'Adam Mazurek',
        '2022-01-02',
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      )
    );
    this.magazynyTbl.push(
      new MagazynAttr(
        'Magazyn1',
        '2021-01-01',
        '2022-01-01',
        'Adam Mazurek',
        '2022-01-02',
        9,
        8,
        7,
        4,
        5,
        6,
        7,
        8,
        9
      )
    );
    this.selectedMagazyn = this.magazynyTbl[0];
  }

  nowaWersja() {
    console.log("Dodaje");
    this.selectedMagazyn = new MagazynAttr(
      this.selectedMagazyn.kod,
      '',
      '',
      'Jan Kowalski',
      '2021-05-18',
      this.selectedMagazyn.pojemnoscMWh,
      this.selectedMagazyn.zbGornyPoziomEnMin,
      this.selectedMagazyn.zbGornyPoziomEnMax,
      this.selectedMagazyn.zbGornyPojemnoscMax,
      this.selectedMagazyn.zbDolnyPoziomEnMin,
      this.selectedMagazyn.zbDolnyPoziomEnMax,
      this.selectedMagazyn.zbDolnyPojemnoscMax,
      this.selectedMagazyn.minIlosc,
      this.selectedMagazyn.maxIlosc
    );
  }

  saveVersion() {
    console.log("Dodaje");
    this.magazynyTbl.push(this.selectedMagazyn);
  }
}
