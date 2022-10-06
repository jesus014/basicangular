import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.css']
})
export class ContactReactiveComponent implements OnInit {

  contactForm!: FormGroup;

  constructor(private readonly fb:FormBuilder) {
    //se inicializa el contactForm
    this.contactForm = this.initForm();

   }

  ngOnInit(): void {
    //se iguala deacuerdo al metodo
    this.contactForm = this.initForm();
    this.onPatchValue();
    //this.onSetValue();

  }

  //se pueden referenciar los datos de contactForm
  onPatchValue(): void {
    this.contactForm.patchValue({name:'jesus'})
  }

  onSetValue(): void {
    this.contactForm.setValue({comment:'hola mundo'})
  }

  //se imprimen los datos del formulario
  onSubmit():void{
    console.log('form =>', this.contactForm.value)
  }

  //se utiliza para validar los datos regresando un tipo FormGrup
  initForm():FormGroup{

  return this.fb.group({
    name:['',[Validators.required, Validators.minLength(3)]],
    checkAdult:['',[Validators.required]],
    departament:[''],
    comment:['',[Validators.required, Validators.maxLength(200)]],
  });
  }

}
