import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog'; 

import { HttpClientModule } from '@angular/common/http'; 
import { baseURL } from './shared/baseurl';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BackService } from './services/back.service';
import { ProcessHttpmsgService } from './services/process-httpmsg.service';
import { StoreComponent } from './store/store.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StoreComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule, 
    MatInputModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ BackService,
    ProcessHttpmsgService,
    { provide: 'baseURL', useValue: baseURL }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
