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
