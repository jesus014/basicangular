import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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
  model:ContactForm = {
    name: '',
    checkAdult: true,
    departament: '',
    comment: '',

  }

  constructor() { }

  ngOnInit(): void {
  }

  //creacion del metodo que se hace llamar en el formulario recibiendo informacion
  onSubmit(formValues:NgForm): void {
    console.log('Form values',formValues)
  }
}
