import { Component, OnInit } from '@angular/core';
import { Curso, CursosService } from '../cursos.service';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {
  curso:Curso
  constructor(private service:CursosService) { }

  ngOnInit(): void {
    //hace falta crear el objeto para volcar los datos en el del formulario
    this.curso=new Curso()
  }
  agregarCurso(){
    this.service.agregarCurso(this.curso).subscribe()
  }
}
