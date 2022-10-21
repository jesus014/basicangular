import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { City, DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild(NgModel) filterInput !:NgModel;
  title = 'basicangular';
  //name='jesus';
  cities:City[] = [];
  selection !:City;
  //valor que toma el ngmodel
  criteria='';

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  /**
   *
   */
  constructor(private readonly dataService: DataService) {
    //se llama el metodo creado en el servie para traer la informacion
    this.dataService.getCities().subscribe(cities => {
      this.cities = [...cities];
    })
  }
  ngAfterViewInit(): void {
    this.filterInput.valueChanges?.subscribe(response=>
      console.log(response)
      );
  }

  updateCity(city: City):void {
    // se recibe una ciudad y se llama al servicio
    this.dataService.updateCity(city).subscribe(data => {
      //se crea un arreglo con el que es igual el id
      const tempArr = this.cities.filter(item => item._id !== city._id);
      //se actualiza el arreglo
      this.cities=[...tempArr, city];
      this.onClear();

    })
  }
  addNewCity(city:string):void{

    //this.cities.push(city);
    //se llama al metodo del serivicio y se agregaal arreglo
    this.dataService.addNewCity(city).subscribe(response=>{
      this.cities.push(response);
    })

  }

  onCitySelected(city: City):void {

    console.log(city);
    this.selection = city;
  }


  onCityDelete(id:string):void {
    console.log(id);
    //se lanza un mensaje y si es si se ejecuta el servicio passando un id
    if(confirm('Are you sure?')){
      this.dataService.deleteCity(id).subscribe(response => {
        const tempArr=this.cities.filter(city=>city._id !== id);
        this.cities=[...tempArr];
        this.onClear();
      })
    }
  }


  onClear():void{

    this.selection={
      _id:'',
      name:''
    };
  }


}
