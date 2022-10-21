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

## change detection

Es el mecanismo o estrategia de deteccion de cambios que utiliza angular para saber cuando debe de actualizar un componente o toda la vista en caso de que la data haya cambiado

### ¿que produce estos cambios?

eventos del mouse, llamadas http, llamadas ajax

### ¿que es change detection?

OnPush: establece la estrategia bajo demanda

Se puede delimitar cuando se haga un renderizado con las propiedades de changeDetection.

```typescript
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cities',
  template: `
        <ul >
               <!-- <li [ngStyle]="{'color':'red'}">{{city}}</li>-->
        <li (click)="onCityClicked(city)" [ngClass]="{'alert alert-info':city===selection}">{{city}}</li>
      </ul>
  <p>{{counterRender}}</p>
  `,
  styleUrls: ['./cities.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CitiesComponent  {

  @Input() city!:string;
  @Input() selection!:string;
  @Output() cityClicked = new EventEmitter<string>();

  onCityClicked(city:string): void {

    this.cityClicked.emit(city);

  }

  counterRender():boolean {
    console.log('render cities')
    return true;
  }
}

```

## ¿Que es un pipe?

El contenido principal de los pipes es tranformar la data, los pipes reciben un dato y pureden transformar esa data.

creacion de pipes: ng g pipe

```typescript
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

```

## Formularios

### formularios template-drive forms

Son ideales para crear formularios sencillos.

se consulto la pagina de angular para obtener informacion al respecto  de los formularios => https://angular.io/api/forms

```html
<h1>Contact form</h1>

<!--Uso de formularios basicos-->
<form (ngSubmit)="onSubmit(contactForm.value)" #contactForm="ngForm">
  <div class="m-4">
    <label for="name" class="form-label">Name</label>
    <!-- se crea la referencia con  el modelo, se asigna un nombre para poder hacer la comparacion y pueda salir el alert-->
    <input type="text" class="form-control" id="name" name="name" [(ngModel)]="model.name" required #name="ngModel">
    <!-- deacuerdo a la propiedad #name se validan los campos-->
    <div [hidden]="name.valid ||name.pristine" class="alert alert-danger">This field is required</div>
  </div>
  <div class="m-4 form-check">
    <label for="checkAdult" class="form-label">Are you over 18 year of age?</label>
    <input type="checkbox" class="form-check-input" id="checkAdult" name="checkAdult"  [(ngModel)]="model.checkAdult" required  #checkAdult="ngModel">
    <div [hidden]="checkAdult.valid ||checkAdult.pristine"  class="alert alert-danger">This field is required</div>
  </div>
  <div class="m-4">
    <label for="departament" class="form-label">Departament</label>
    <select name="departament" id="departament" class="form-select form-select-sm"  [(ngModel)]="model.departament" >
      <option selected> Open this select menu</option>
      <option value="marketing"> Marketing</option>
      <option value="sales"> Sales</option>
      <option value="other"> Other</option>
    </select>
  </div>

  <div class="m-4">
    <label for="comment" class="form-label">Comment</label>
    <textarea type="comment" class="form-control" id="comment"  rows="4" placeholder="leave a comment" name="comment"  [(ngModel)]="model.comment" required #comment="ngModel"></textarea>
    <div [hidden]="comment.valid ||comment.pristine"  class="alert alert-danger">This field is required</div>
  </div>

  <div class="d float-end">
    <button class="btn btn-info btn-lg" [disabled]="contactForm.invalid">Send</button>
  </div>
</form>

<pre>{{contactForm.value|json}}</pre>

```

### formularios reactivos.

Todo parte de AbastractControl.

posteriormente se puede utilizar el FormControl o FormArray

Reactive forms Directives

formGroup Form COntrol FormControlName

```html
<h1>Contact form</h1>

<!--Uso de formularios basicos-->
<form (ngSubmit)="onSubmit()" [formGroup]="contactForm">
  <div class="m-4">
    <label for="name" class="form-label">Name</label>
    <!-- se crea la referencia deacuerdo al [formGroup]="contactForm"  -->
    <input type="text" class="form-control" id="name" name="name"  formControlName="name">
    <!-- deacuerdo a la propiedad formControlName="name" y todas las demas propiedades -->
    <div *ngIf= "contactForm.get('name')?.touched && contactForm.get('name')?.errors?.['required']" class="alert alert-danger">This field is required</div>
    <div *ngIf= "contactForm.get('name')?.touched && contactForm.get('name')?.errors?.['minlength']" class="alert alert-danger">
      Names must be longer than {{contactForm.get('name')?.errors?.['minlength'].requiredLength}} characters</div>
  </div>

  <div class="m-4 form-check">
    <label for="checkAdult" class="form-label">Are you over 18 year of age?</label>
    <input type="checkbox" class="form-check-input" id="checkAdult" name="checkAdult" formControlName="checkAdult">
    <div *ngIf= "contactForm.get('checkAdult')?.touched && contactForm.get('checkAdult')?.errors?.['required']" class="alert alert-danger">This field is required</div>
  </div>
  <div class="m-4">
    <label for="departament" class="form-label">Departament</label>
    <select name="departament" id="departament" class="form-select form-select-sm" formControlName="departament" >
      <option selected> Open this select menu</option>
      <option value="marketing"> Marketing</option>
      <option value="sales"> Sales</option>
      <option value="other"> Other</option>
    </select>
  </div>

  <div class="m-4">
    <label for="comment" class="form-label">Comment</label>
    <textarea type="comment" class="form-control" id="comment"  rows="4" placeholder="leave a comment" name="comment"  required formControlName="comment"></textarea>
    <div *ngIf= "contactForm.get('comment')?.touched && contactForm.get('comment')?.errors?.['required']" class="alert alert-danger">This field is required</div>
  </div>

  <div class="d float-end">
    <button class="btn btn-info btn-lg" [disabled]="contactForm.invalid">Send</button>
  </div>
</form>

<pre>{{contactForm.value|json}}</pre>

```

## Directivas Angular

Encargadas de la navegacion de un componente a otro

pasar paremetros

redireccionar

### proteger rutas(guards)

**canDeactivate**: se utiliza para confirmar la salida de una pagina

**canActivate**: se  utiliza para proteger las rutas evaluando algo

Ejemplo de diferentes tipos de rutaas

```typescript
const routes: Routes = [
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'contact-reactive', component:ContactReactiveComponent, canDeactivate:[WithoutSaveGuard]},
  {path:'contact-templeate/:id', component:ContactComponent},
  {path:'home', component:HomeComponent},
  //uso de rutas hijas
  {path:'users', component:UserComponent,canActivate:[PermissionsGuard],
   children:[
    {path:'list',component:ListComponent},
    {path:'details',component:DetailsComponent},
  ]
  },
  {path:'**', component:PagenotfoundComponent}

];
```

## Resolve

**Es el mecanismo que se encarga para que hasta que tengamos data se inicialice.**

interfaace que las clases pueden implementar para saer un proveedor de datos.

se debe usar con el router para resolver datos durante la navegacion.

se debe implementar un metodo resolve() que se invoca cuando comienza la navegacion

el router espera a que se resuelvan los datos antes de que finalmente se active la ruta

Es el mecanismo que se encarga para que hasta que tengamos data se inicialice.

## Carga diferida.

retrazar la carga de un determinado modulo, hasta que sea necesario, carga perezosa 

ng g m contact-reactive --routing true

forRoot => se carga de manera inmedita todo el bondel

forchild => se carga cuando se pide (carga diferida), se carga bajo demanda, modulo hijo.

## INTERCEPTOR

Intercepta una peticion http y la modifica.

se lannza la peticion de angular  => interceptor => servidor

se lannza la peticion de angular  <= interceptor <= servidor

### Programacion Reactiva

la programacion reactiva es programacion orientada al manejo de streams de datos asincronos y la propagacion de los cambios

RxJS

es una libreria para componer programas asincronos y basados en eventos usados secuencia de observables.

programacion reactiva, observables, operators, subjects,subcriptions

observables solamente es un string de datos => Eventos de la ui, hhtp request, web sockets, estado de una app

observable=> observadores=> suscripciones

subject tiene el mismo comportamiento que un observable que puede compartir data con varios observadores u observers

* subject
* behavior subject

* replay subject
* async subject

| Objservables                          | promesas                                |
| ------------------------------------- | --------------------------------------- |
| se ejecuta inmediatamente             | no comienza hasta su suscripcion        |
| emite solo un valor                   | multiples valores a lo largo del tiempo |
| envia los errores a las promesas hija | observable proporciona operadores       |
| usa la clausula .then()               |                                         |

## content projection

es un patron que no ayuda a insertar o vizualizar contenido, practicamente para la vizualizacion de contenido

single-slot

multi-slot

```html
<div class="card">
  <div class="card-header">
    <ng-content select="[card-header]" ></ng-content>
  </div>
  <div class="card-body">
    <ng-content select="[card-body]"></ng-content>

  </div>
</div>

```


## ng container y ng templete

### **ng container**

**ng container** puede tener directivas estructurales y no añade un nuevo elemento al dom

```html
        <ng-container *ngIf="selection">
          <p *ngIf="selection?.name">Your city is:{{selection?.name}}</p>
          <app-button (click)="onClear()" [color]="'blue'" [label]="'clear your city'" ></app-button>
        </ng-container>
```

### ****ng templete**
**

**ng templete** nosotros le decimos cuando se renderice la plantilla:

```html
           <ng-container *ngIf="cities.length > 1; else templateEmpty">
             <app-cities *ngFor="let city of (cities| filter:criteria)"
                 (cityDeleteEvent)="onCityDelete($event)"
                 (citySelectedEvent)="onCitySelected($event)"
                 [city]="city" [selection]="selection"></app-cities>
           </ng-container>

```

**ng templete** nosotros le decimos cuando se renderice la plantilla:

```html
<!--Creacion de ng templeate que sera llamado en la parte de arriba si el ng se confirma-->
<ng-template #templateEmpty> We no cities XD</ng-template>


```
