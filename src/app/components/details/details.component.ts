import { Component, OnInit } from '@angular/core';
import { PeliculasService } from "../../providers/peliculas.service";
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styles: []
})
export class DetailsComponent implements OnInit {

    pelicula: any;
    regresarA: string = "";
    busqueda:string ="";

    constructor(public _ps: PeliculasService,
        public route: ActivatedRoute) {

        this.route.params.subscribe(parametros => {
            this.regresarA = parametros['pag']

            if(parametros['busqueda']) {
                this.busqueda = parametros['busqueda'];
            }

            this._ps.getPelicula(parametros['id'])
                .subscribe(pelicula =>{

                     this.pelicula = pelicula;
                  })
        })
    }

    ngOnInit() {
    }

}
