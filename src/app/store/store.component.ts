import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material'; 
import { ActivatedRoute } from '@angular/router';
import { BackService } from '../services/back.service';
import { Item } from '../models/Item';
import { LoginComponent } from '../login/login.component';
import { dialogConfig } from '../shared/dialogConfig';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  items: Item[];
  login: boolean;
  msgError: string;

  navigationSubscription;

  constructor(private service: BackService,
    private rota: ActivatedRoute,
    private dialog: MatDialog) { }

    atualizaListaItems() {
      setTimeout (() => {
        this.service.getItems()
        .subscribe((items) => this.items = items,
        msgError => this.msgError = <any>msgError);
      }, 500);
    }


  ngOnInit() {

    this.rota.queryParams
      .subscribe(params => {
        this.login = params.login;
      });

    this.service.getItems()
    .subscribe((items) => this.items = items,
    msgError => this.msgError = <any>msgError);

    if (this.login) {
      this.openLoginForm();
    }
  }


  openLoginForm(): void {

    let dialogRef = this.dialog.open(LoginComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => console.log("Dialog output:", data)
    ); 
  }


}
