import { Component, OnInit, VERSION } from '@angular/core';
import { Params } from './model/Params';
import { DataService } from './services/data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isScenariuszSelected:boolean;
  selectedScenariusz:any;
  constructor(private data: DataService) {
    this.data.isScenariuszSelected.subscribe( value => {
      this.isScenariuszSelected = value;
  })
}


  ngOnInit() {
    this.selectedScenariusz = this.data.selectedScenariusz;
  }
  

  closeScenariusz(){
    this.data.isScenariuszSelected.next(false);
  }


}
