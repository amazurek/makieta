import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-scenariusze',
  templateUrl: './scenariusze.component.html',
  styleUrls: ['./scenariusze.component.css']
})


export class ScenariuszeComponent implements OnInit {



  constructor(private data:DataService) { }
  

  
   scenariusze = [];

  ngOnInit() {
    this.scenariusze = this.data.getScenariusze();
  }

  
}