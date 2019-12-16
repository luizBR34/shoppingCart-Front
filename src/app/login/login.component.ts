import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from "@angular/material";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../models/usuario';
import { BackService } from '../services/back.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormulario: FormGroup;
  user: Usuario;
  description: string;
  msgError: string;
  statusLogin: boolean;
  @ViewChild('lform') loginFormDirective; //Acessa o formulario do template em HTML

  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<LoginComponent>,
    private service: BackService,
    private router: Router) { 
    this.description = "Please identify yourself or register new items";
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.loginFormulario = this.fb.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
    });

  }

  get f() { return this.loginFormulario.controls; }



  signin() {
    this.user = this.loginFormulario.value;

    
    this.service.postLogaUsuario(this.user)
    .subscribe(status => this.statusLogin = status,
      msgError => this.msgError = <any>msgError);
    

    this.loginFormulario.reset({
      email: '',
      senha: ''
    });
    

    this.loginFormDirective.resetForm();
    this.dialogRef.close(this.loginFormulario.value);
  }


  register() {

    this.loginFormDirective.resetForm(); 
    this.dialogRef.close(this.loginFormulario.value);

    this.router.navigateByUrl('/register');
  }

}
