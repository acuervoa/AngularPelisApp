import { Injectable } from '@angular/core';
import { Jsonp } from "@angular/http";
import 'rxjs/Rx'; // Map

@Injectable()
export class PeliculasService {

    private apiKey:string = "a4a8db2d469fef1aa0a258e85fd727de";
    private urlMoviedb:string = "https://api.themoviedb.org/3";


  constructor(private jsonp:Jsonp ) { }

  getCartelera() {

      let fechaDesde = new Date();
      let fechaHasta = new Date();
      fechaHasta.setDate(fechaHasta.getDate() + 7);

      let fechaDesdeStr = `${ fechaDesde.getFullYear() }-${ fechaDesde.getMonth()+1 }-${ fechaDesde.getDate() }`;
      let fechaHastaStr = `${ fechaHasta.getFullYear() }-${ fechaHasta.getMonth()+1 }-${ fechaHasta.getDate() }`;


      let url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${fechaDesdeStr}&primary_release_date.lte=${fechaHastaStr}&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`

      return this.jsonp.get( url )
                .map( res => res.json().results );
  }

  getPopulares(){

      let url = `${this.urlMoviedb}/discover/movie?api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`

      return this.jsonp.get( url )
                .map( res => res.json() );
  }

  searchPelicula( texto: string ) {
      let url = `${this.urlMoviedb}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`

      return this.jsonp.get( url )
                .map( res => res.json() );
  }

}
