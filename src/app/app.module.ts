import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltaComponent } from './alta/alta.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { CursosService } from './cursos.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BajaComponent } from './baja/baja.component';
import { CursosCortosComponent } from './cursos-cortos/cursos-cortos.component';

@NgModule({
  declarations: [
    AppComponent,
    AltaComponent,
    BusquedaComponent,
    BajaComponent,
    CursosCortosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
