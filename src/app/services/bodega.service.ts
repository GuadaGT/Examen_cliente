import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Bottle, Root} from "../common/bodega";

@Injectable({
  providedIn: 'root'
})
export class BodegaService {

  private baseURL = 'https://apibodega.vercel.app/api/v2/bodega/bottles?page=1/';

  constructor(private http: HttpClient) { }

  //CRUD PARCIAL
  //LEER TODO
  getAll(): Observable<Root>{
    return this.http.get<Root>(this.baseURL + 'allBottles');
  }

  //INSERTAR UNA
  addBottle(bodega: Bottle): Observable<Bottle>{
    return this.http.post<Bottle>(this.baseURL + 'bottles', bodega);
  }
}
