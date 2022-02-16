import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaComponent } from './alta/alta.component';
import { BajaComponent } from './baja/baja.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { CursosCortosComponent } from './cursos-cortos/cursos-cortos.component';

const routes: Routes = [
  {
    path:'cursosPorDuracion',
    component:CursosCortosComponent
  },
  {
    path:'baja',
    component:BajaComponent
  },
  {
    path:'consulta',
    component:BusquedaComponent
  },
  {
    path:'alta',
    component:AltaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
