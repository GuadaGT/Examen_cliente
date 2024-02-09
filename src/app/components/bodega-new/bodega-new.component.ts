import { Component } from '@angular/core';
import {Bottle} from "../../common/bodega";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {BodegaService} from "../../services/bodega.service";
import {FormValidators} from "../../validaciones/formValidators";

@Component({
  selector: 'app-bodega-new',
  templateUrl: './bodega-new.component.html',
  styleUrls: ['./bodega-new.component.css']
})
export class BodegaNewComponent {

  formBodega: FormGroup = this.formBuilder.group({
    _id:[''],
    nombre:['',[Validators.required,Validators.minLength(5),FormValidators.notOnlyWhiteSpace]],
    imagen:['',[Validators.required,Validators.minLength(6),FormValidators.notOnlyWhiteSpace]],
    uva:['',[Validators.required,Validators.minLength(5),FormValidators.notOnlyWhiteSpace]],
    anyo:[0,[Validators.required,Validators.min(1900),Validators.max(2024)]],
    precio:[0,[Validators.required,Validators.min(0)]]
  })

  constructor(private bodegaService: BodegaService,
              private formBuilder: FormBuilder)
  {}
  get nombre(): any{
    return this.formBodega.get('nombre');
  }
  get imagen(): any{
    return this.formBodega.get('imagen');
  }
  get uva(): any{
    return this.formBodega.get('uva');
  }
  get anyo(): any{
    return this.formBodega.get('anyo');
  }
  get precio(): any{
    return this.formBodega.get('precio');
  }

  insertar(){
    if(this.formBodega.invalid){
      this.formBodega.markAllAsTouched();
      return;
    }
    this.bodegaService.addBottle(this.formBodega.getRawValue()).subscribe(
      {
      next:value => {
        alert(value.nombre + ' ha sido añadida.');
        console.log(value);
      },
        error:(err)=>{
        console.log(err);
        },
        complete:()=>{
        console.log('Complete.');
        }
    })
  }
}
