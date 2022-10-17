import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.css']
})
export class ContactReactiveComponent implements OnInit {

  contactForm!: FormGroup;
  name!: string;
  departaments:string[]=[]

  constructor(private readonly fb:FormBuilder,
              private readonly route:ActivatedRoute) {

    //haciendo uso de queryParams para recibir un valor en la propiedad name
    //posteriormente asignarlo a la variable creada
    this.route.queryParams.subscribe((params:Params) => {
      this.name =params['name'];
    })
    //se inicializa el contactForm
    this.contactForm = this.initForm();

   }

  ngOnInit(): void {
    this.departaments= this.route.snapshot.data['departaments'];
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
