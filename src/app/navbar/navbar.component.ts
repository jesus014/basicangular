import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //creacion de navbar haciendo uso de propiedades como routerlink para uso de rutaas
  constructor(private readonly router:Router) { }

  ngOnInit(): void {
  }

  //creacion de metodo para rutas haciendo uso de queryParams
  goToReactive(): void {
    this.router.navigate(['contact-reactive'],{queryParams:{name:'Jesus'}})
  }

  //creacion de metodo para rutas haciendo uso de pasar un valor por ejemplo un id
  goToTemplate(): void {
    this.router.navigate(['contact-templeate','534'])
  }

}
