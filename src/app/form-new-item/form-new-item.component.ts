import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddNewItem(item:string):void{

    console.log(item);
    //lo manda al componente padre una vez declarado como string arriba
    this.newItemEvent.emit(item);

  }
  counterRender():boolean {
    console.log('render form')
    return true;
  }

}
