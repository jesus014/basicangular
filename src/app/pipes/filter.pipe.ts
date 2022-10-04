//pipe basico que realiza un filtrado
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'filter',
})

export class FilterPipe implements PipeTransform {

  // en este metodo se reciben los valores en este caso un arreglo de strings,
  // y recibe un parametro llamado arg que va a ser evaluado
  //retorna un arreglo de strings
  transform(values: string[], arg: string ) : string[] {

    let result:string[] = [];

    if(!arg || arg?.length<3 ) return values;

    for(const value of values){

      if(value.toLowerCase().indexOf(arg.toLowerCase())> -1){
        result = [...result,value]
      }

    }

    return result;

  }

}
