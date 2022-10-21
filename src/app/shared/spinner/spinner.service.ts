import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  //es un observable de tipo subject
  isLoading$ =new Subject<boolean>();
  //creacion de metods para que se vizualice el spinner
  show():void{
    this.isLoading$.next(true);
  };

  hide():void{
    this.isLoading$.next(false);
  }
  constructor() { }
}
