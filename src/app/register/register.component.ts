import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from '../models/Item';
import { BackService } from '../services/back.service';
import { MatDialog } from '@angular/material'; 


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  itemsFormulario: FormGroup;
  item: Item;
  description: string;
  msgError: string;
  statusLogin: boolean;
  @ViewChild('iform') registerFormDirective; 

  constructor(private fb: FormBuilder,
    private dialog: MatDialog,
    private service: BackService) { 
    this.description = "Please fill the form to add new items";
    this.dialog.closeAll();
    this.createForm();
  }

  ngOnInit() {
    this.dialog.closeAll();
  }

  createForm() {
    this.itemsFormulario = this.fb.group({
      nome: ['', Validators.required],
      valor: ['', Validators.required]
    });

  }

  get f() { return this.itemsFormulario.controls; }



  save() {
    this.item = this.itemsFormulario.value;

    this.service.postCadastraItem(this.item)
    .subscribe(status => this.statusLogin = status,
      msgError => this.msgError = <any>msgError);
    
    this.itemsFormulario.reset({
      nome: '',
      valor: ''
    });
    

    this.registerFormDirective.resetForm(); //Reseta o template
  }



  back() {



  }

}

