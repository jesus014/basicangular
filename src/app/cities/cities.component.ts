import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cities',
  template: `
        <ul >
               <!-- <li [ngStyle]="{'color':'red'}">{{city}}</li>-->
               <!--  se  utiliza un pipe en el cual regresa el string con la letra mayuscula de inicio-->
        <li (click)="onCityClicked(city)" [ngClass]="{'alert alert-info':city===selection}">{{city | titlecase}}</li>
      </ul>
  `,
  styleUrls: ['./cities.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CitiesComponent  {

  @Input() city!:string;
  @Input() selection!:string;
  
  //uso de output para el evento que se declara en html
  @Output() cityClicked = new EventEmitter<string>();

  onCityClicked(city:string): void {

    this.cityClicked.emit(city);

  }

  counterRender():boolean {
    console.log('render cities')
    return true;
  }
}
