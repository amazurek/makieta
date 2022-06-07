import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-scenariusze',
  templateUrl: './scenariusze.component.html',
  styleUrls: ['./scenariusze.component.css']
})


export class ScenariuszeComponent implements OnInit {



  constructor() { }
  

  
   scenariusze = [{
    id:1,
    name:"Scenariusz Adama",
    data_od: new Date('2022-07-08'),
    data_do: new Date('2022-07-09')
  },
  {
    id:2,
    name:"Scenariusz Adama",
    data_od: new Date('2022-07-08'),
    data_do: new Date('2022-07-09')
  }
];

  ngOnInit() {
  }

  
}