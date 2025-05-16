import { Injectable } from '@angular/core';
import { RastreoI } from '../modelos/rastreo.interface';
import { Observable } from 'rxjs';
import {  HttpClient, HttpHeaders } from '@angular/common/http'
import { FechaHitoI } from '../modelos/fecha_hito.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //url de la api
  url:string = "http://localhost:80/API GRADOS TITULOS/";

  constructor(private http:HttpClient) { }

  //funcion para traer eel hito del tramite
  getTramite(dni: any):Observable<RastreoI>{
    let direccion = this.url + "hito?rastreo=" + dni;//tramites?id=6
    return this.http.get<RastreoI>(direccion);
  }

  //funcion para traer eel hito del tramite
  getSingleTramite(id: any):Observable<RastreoI>{
    let direccion = this.url + "hito?singleR=" + id;//tramites?id=6
    return this.http.get<RastreoI>(direccion);
  }
  getFechaHito(id:any):Observable<FechaHitoI>{
    let direccion = this.url + "fecha_hito?id="+id;
    return this.http.get<FechaHitoI>(direccion);
  }
}
