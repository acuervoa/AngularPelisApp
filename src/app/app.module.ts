import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsonpModule, HttpModule } from "@angular/http";

import { AppComponent } from './app.component';

import { APP_ROUTING } from "./app.routes";
import { FormsModule } from "@angular/forms";

// Services
import { PeliculasService } from "./providers/peliculas.service";

// Pipes
import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { SearchComponent } from './components/search/search.component';
import { GaleriaComponent } from './components/home/galeria.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DetailsComponent,
    SearchComponent,
    PeliculaImagenPipe,
    GaleriaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    JsonpModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
