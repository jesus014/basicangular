import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { City } from '../services/data.service';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class FormNewItemComponent implements AfterViewInit {

  @Input() className='btn-primary'
  @Input() label!: string

  //se declara el output declarando el tipo
  @Input() selection!:City;
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() updateItemEvent = new EventEmitter<City>();

  //usamos ViewChild Decorator utilizando bajo referencia que tenemos en el formulario de tipo ElementRef que se encuentra en como #newItem line8
  @ViewChild('newItem') newItem!:ElementRef;
  constructor() { }

  ngAfterViewInit(): void {
    console.log('this.newItem', this.newItem);
    this.newItem.nativeElement.focus();


  }

  onAddNewItem():void{

    this.newItemEvent.emit(this.newItem.nativeElement.value);
    //console.log(item);
    //lo manda al componente padre una vez declarado como string arriba
    //this.newItemEvent.emit(item);
    this.onClear();


  }

  onUpdateItem() :void{

    //console.log(item);
    //lo manda al componente padre una vez declarado como string arriba
    const city:City = {
      _id:this.selection._id,
      name:this.newItem.nativeElement.value,
    }
    this.updateItemEvent.emit(city);
    this.onClear();

  }

  counterRender():boolean {
    console.log('render form')
    return true;
  }

  private onClear():void {
    this.newItem.nativeElement.value = '';
  }
}
