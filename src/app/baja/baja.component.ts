import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-baja',
  templateUrl: './baja.component.html',
  styleUrls: ['./baja.component.css']
})
export class BajaComponent implements OnInit {
  denominacion:string
  constructor(private service:CursosService) { }

  ngOnInit(): void {
  }
  eliminar(){
    this.service.eliminarCurso(this.denominacion).subscribe()
  }
}
