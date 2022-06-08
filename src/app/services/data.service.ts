import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  selectedScenariusz:any;
  constructor() {}

  getScenariusze() {
    return [
      {
        id: 1,
        name: 'Scenariusz Adama',
        data_od: new Date('2022-07-08'),
        data_do: new Date('2022-07-09'),
        autor: 'Adam Mazurek',
        data_mod: new Date('2022-07-09'),
      },
      {
        id: 2,
        name: 'Scenariusz Adama',
        data_od: new Date('2022-07-08'),
        data_do: new Date('2022-07-09'),
        autor: 'Jan Kowalski',
        data_mod: new Date('2022-07-09'),
      },
    ];
  }
  
}
