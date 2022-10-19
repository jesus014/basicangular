import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { City } from '../services/data.service';

@Component({
  selector: 'app-cities',
  template: `
        <ul  class="list-group">
               <!-- <li [ngStyle]="{'color':'red'}">{{city}}</li>-->
               <!--  se  utiliza un pipe en el cual regresa el string con la letra mayuscula de inicio-->
        <li class="list-group-item mt-1" (click)="onCitySelected(city)"
        [ngClass]="{' active':city?._id === selection?._id}">{{city?.name | titlecase}}
            <button (click)="onCityDelete(city._id)"
            *ngIf="city?._id === selection?._id"
             type="button" class="btn btn-danger  float-end" > Delete</button>
      </li>
      </ul>
  `,
  styleUrls: ['./cities.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CitiesComponent  {

  //se tipo para que fuera de tipo City
  @Input() city!:City;
  @Input() selection!:City;

  //uso de output para el evento que se declara en html
  @Output() citySelectedEvent = new EventEmitter<City>();
  //creacion de output para el evento delete pasando un tipo string el id
  @Output() cityDeleteEvent = new EventEmitter<string>();


  onCitySelected(city:City): void {

    this.citySelectedEvent.emit(city);

  }

  counterRender():boolean {
    console.log('render cities')
    return true;
  }

  //se llama en el html pidiendo el id
  onCityDelete(id:string):void {
  this.cityDeleteEvent.emit(id);
  }
}
