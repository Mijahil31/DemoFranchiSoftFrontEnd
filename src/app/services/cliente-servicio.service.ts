import { Injectable } from '@angular/core';
import { ClienteModel } from '../models/cliente-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable({
  providedIn: 'root'
})
export class ClienteServicioService {

  public url: string;

  constructor(private _http: HttpClient) {
    this.url = Global.url;
  }

  listarClientes(): Observable<any>{
    return this._http.get(this.url+'clientes');
  }

  guardarCliente(cliente: ClienteModel): Observable<any>{
    let params = JSON.stringify(cliente);
    let header = new HttpHeaders().set('Content-type','application/json');
    return this._http.post(this.url+'cliente', params, {headers: header});
  }

  eliminarCliente(id: number):Observable<any>{
    let header = new HttpHeaders().set('Content-type','application/json');
    return this._http.delete(this.url+'cliente/'+id, {headers: header});
  }

  obtenerCliente(id: number): Observable<any>{
    let header = new HttpHeaders().set('Content-type','application/json');
    return this._http.get(this.url+'cliente/'+id, {headers: header});
  }

  actualizarCliente(clienteModificar: ClienteModel, id: number): Observable<any>{
    let params = JSON.stringify(clienteModificar);
    let header = new HttpHeaders().set('Content-type','application/json');
    return this._http.put(this.url+'cliente/'+id, params, {headers: header});
  }
}
