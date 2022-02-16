import { Component, OnInit } from '@angular/core';
import { Curso, CursosService } from '../cursos.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  cursos:Curso[]
  tematica:string
  tematicas:string[]
  constructor(private service:CursosService) { }

  ngOnInit(): void {
    this.service.tematicas().subscribe(data=>this.tematicas=data)
  }

  getCursosPorTematica(){

    this.service.cursosPorTematica(this.tematica).subscribe(data=>this.cursos=data)
  }

}
