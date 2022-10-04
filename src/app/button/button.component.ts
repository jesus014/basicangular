import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ButtonComponent implements OnChanges ,OnInit, OnDestroy {

  //declaracion de decoradores input para hacer uso desde el componente padre
  @Input() color!: string;
  @Input() label!: string;

  constructor() { }

  //vida de un componente
  ngOnChanges(changes: SimpleChanges): void {
    console.log('chamges',changes);
  }

  ngOnInit(): void {
    console.log('init')
  }

  ngOnDestroy(): void {
    console.log('destroy')
  }
  //termino de vida de un componente


  counterRender():boolean {
    console.log('render button')
    return true;
  }
}
