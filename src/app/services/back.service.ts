import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { Observable } from 'rxjs';
import { catchError, retry, map, } from 'rxjs/operators';

import { ProcessHttpmsgService } from './process-httpmsg.service';
import { Usuario } from '../models/usuario';


const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class BackService {

  constructor(private http: HttpClient,
    private ProcessHTTPMsgService: ProcessHttpmsgService) { }

    postLogaUsuario(user: Usuario): Observable<boolean> {
      const url = `${baseURL}/logar`;
  
      const formOptions = {
        headers: new HttpHeaders({
          'content-type': 'application/x-www-form-urlencoded'
        })
      };
  
      const params = new HttpParams()
      .set('username', user.email)
      .set('password', user.senha);
  
      return this.http.post<boolean>(url, params, formOptions)
      .pipe(catchError(this.ProcessHTTPMsgService.handleError));
    }

}
