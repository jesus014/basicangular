import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { City } from '../services/data.service';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class FormNewItemComponent implements OnInit {

  @Input() className='btn-primary'
  @Input() label!: string

  //se declara el output declarando el tipo
  @Input() selection!:City;
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() updateItemEvent = new EventEmitter<City>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddNewItem(item:string):void{

    console.log(item);
    //lo manda al componente padre una vez declarado como string arriba
    this.newItemEvent.emit(item);

  }

  onUpdateItem(item:City, change:string) :void{

    console.log(item);
    //lo manda al componente padre una vez declarado como string arriba
    const city:City = {
      _id:item._id,
      name:change
    }
    this.updateItemEvent.emit(city);

  }

  counterRender():boolean {
    console.log('render form')
    return true;
  }

}
