import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaComponent } from './alta/alta.component';
import { BusquedaComponent } from './busqueda/busqueda.component';

const routes: Routes = [
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
