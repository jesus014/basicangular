import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  title = 'basicangular';
  name='jesus';
  cities=['Mexico', 'San Francisco', 'San Francisco']
  selection !:string;


  onClear():void{

    this.selection='';
  }

  onCityClicked(city: string):void {

    console.log(city);
    this.selection = city;
  }

}
