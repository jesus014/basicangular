## Data binding

se utiliza para el paso de informacion entre componentes.

## Directivas

Directiva:  son atributos que pueden cambiar la apariencia.

tipos de directivas: estructurales, de atributos, directivas customs, componentes son directivas con template.

### Directivas estructurales:

** *ngIf y ngFor***

    ngIf: Deacuerdo al valor de una propiedad esta etiqueta puede ser mostrada o no, haciendo funcion de un if normal en programacion, haciendo 		manipulacion del dom

    ngFor: se  hace un recorrido en cierta propiedad para posteriormente poder ser mostrado, haciendo una funcion parecida a un for.

```html
<p *ngIf="name">el nombres es :{{name}}</p>
<input type="text" [(ngModel)]="name">


<ul *ngFor="let city of cities">
  <li>{{city}}</li>
</ul>

```

### Directivas de atributos:

ngClass: se puede definir ciertas propiedades de estilos que podran ser tomadas que esten declaradas en el scss, estos estilos pueden ir condicionados.

```html
<ul>
  <li [ngClass]="'selected blue'">{{city}}</li>
</ul>


<ul>
  <li [ngClass]="{'selected':false}">{{city}}</li>
</ul>

<ul>
  <li [ngClass]="{'selected':city==='Mexico'}">{{city}}</li>
</ul>

```

ngStyle: se puede definir ciertas propiedades de estilos que podran ser tomadas que esten declaradas en el mismo archivo html, estos estilos pueden ir condicionados.

```html

<ul *ngFor="let city of cities">
  <li [ngStyle]="{'color':'red'}">{{city}}</li>
</ul>
```

## Ciclos de vida de componentes:

| Evento                       | Definicion.                                                                                                                                                                                                                                                                                                         |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ngOnChanges()`            | Este*hook* se llama al inicio y cada vez que Angular detecta un cambio en los inputs del componente (cuando tienes algún  *property binding* ). Recibe como parámetro un objeto [`SimpleChanges`](https://angular.io/api/core/SimpleChanges), con los valores actuales y anteriores (si había) de los inputs. |
| `ngOnInit()`               | Este*hook* te permite inicializar el componente una vez ha recibido las propiedades de entrada.                                                                                                                                                                                                                   |
| `ngDoCheck()`              | Sirve para detectar y actuar sobre cambios que Angular no va a detectar por si mismo. Se llama también durante cada ciclo de detección de cambios, después de `ngOnChanges()`.                                                                                                                                 |
| `ngAfterContentInit()`:    | Se ejecuta una sola vez, justo después de que Angular proyecte contenido externo en la vista del componente (con `ng-content`).                                                                                                                                                                                  |
| `ngAfterContentChecked()`: | Se ejecuta después de que Angular compruebe el contenido proyectado en el componente. Se ejecuta también durante los ciclos de detección de cambios, después de `ngDoCheck()`.                                                                                                                                |
| `ngAfterViewInit()`:       | Se llama una única vez, tras inicializar las vistas y sub-vistas del componente.                                                                                                                                                                                                                                   |
| `ngAfterViewChecked()`     | Se llama después de comprobar los cambios de las vistas y sub-vistas del componente. Se ejecuta también durante el ciclo de detección de cambios, después de `ngAfterContentChecked()`.                                                                                                                       |
| `ngOnDestroy()`            | Se llama solo una vez, justo antes de que Angular destruya el componente, y sirve para prevenir memory leaks, eliminando por ejemplo suscripciones a*Observables* e  *event handlers* .                                                                                                                         |

## EventBinding

Enlace de eventos: permite escuchar y responder a las acciones de usuarios(pulsaciones de teclas, movimientos de mouse, clicks))

```html
<button (click)="onSave()"></button>

```

## Decorador Input

Decorador :es un tipo especial de declaracion que se puede adjuntar a una clase, una propiedad, un parametro, le pasamos una configuracion y entonces modificamos .

@Input: modifica el comportamiento atraves de una propiedad que podamos pasar., puede recibir su valor de su componente padre.

padre=>hijo


## Decorador OutPut

@Output

@OutPut: modifica el comportamiento atraves de una propiedad que podamos pasar., puede recibir datos o cambios de componente hijo al componente padre.

hijo=>´padre
