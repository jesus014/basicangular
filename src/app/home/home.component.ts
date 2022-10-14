import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {



  title = 'basicangular';
  name='jesus';
  cities=['Mexico', 'San Francisco', 'San Francisco']
  selection !:string;
  //valor que toma el ngmodel
  criteria='';

  addNewCity(city:string):void{

    this.cities.push(city);

  }

  onCityClicked(city: string):void {

    console.log(city);
    this.selection = city;
  }


  onClear():void{

    this.selection='';
  }
}
