import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  url: String ="http://localhost:8500/"
  constructor(private http:HttpClient) { }
  tematicas(){
    return this.http.get<string[]>(this.url+"tematicas")
  }
  cursosPorTematica(tematica:string){
    return this.http.get<Curso[]>(this.url+"cursostematica/"+tematica)
  }
  agregarCurso(curso:Curso){
    //Como se pasa en el cuerpo y no como params se pone como curso directamente sin params
    return this.http.post<String>(this.url+"curso",curso)
  }
}
export class Curso{
  codigoCurso: number;
	denominacion:string;
	duracion:number;
	tematica:string;
}
