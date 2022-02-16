import { Component, OnInit } from '@angular/core';
import { Curso, CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos-cortos',
  templateUrl: './cursos-cortos.component.html',
  styleUrls: ['./cursos-cortos.component.css']
})
export class CursosCortosComponent implements OnInit {
  duracion:number
  cursos:Curso[]
  constructor(private service:CursosService) { }

  ngOnInit(): void {
  }
  cursosPorDuracion(){
    this.service.cursosPorDuracion(this.duracion).subscribe(data=>this.cursos=data)
  }
}
