import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

interface ContactForm{
  "name": string;
  "checkAdult": boolean;
  "departament": string;
  "comment": string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  //creacion de modelo para hacer uso en el html para hacer binding con las propiedades
  //
  id!: string;
  model:ContactForm = {
    name: '',
    checkAdult: true,
    departament: '',
    comment: '',

  }

  constructor(private readonly route:ActivatedRoute) { }

  ngOnInit(): void {
    //haciendo uso de params para recibir un valor  y asignarlo a id
    this.route.params.subscribe((params:Params) => {
      this.id=params['id'];
    })
  }

  //creacion del metodo que se hace llamar en el formulario recibiendo informacion
  onSubmit(formValues:NgForm): void {
    console.log('Form values',formValues)
  }
}
