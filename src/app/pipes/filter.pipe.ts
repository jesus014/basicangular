//pipe basico que realiza un filtrado
import { Pipe, PipeTransform } from "@angular/core";
import { City } from '../services/data.service';

@Pipe({
  name:'filter',
})

export class FilterPipe implements PipeTransform {

  // en este metodo se reciben los valores en este caso un arreglo de strings,
  // y recibe un parametro llamado arg que va a ser evaluado
  //retorna un arreglo de strings
  transform(cities: City[], arg: string ) : City[] {

    let result:City[] = [];

    if(!arg || arg?.length<3 ) return cities;

    for(const city of cities){

      if(city.name.toLowerCase().indexOf(arg.toLowerCase())> -1){
        result = [...result,city]
      }

    }

    return result;

  }

}
