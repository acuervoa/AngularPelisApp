import { Component } from '@angular/core';
import { PeliculasService } from "../../providers/peliculas.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: []
})
export class HomeComponent {

    cartelera: any;
    populares: any;
    originales: any;

    constructor(private _ps: PeliculasService) {

        this._ps.getCartelera()
            .subscribe(data => this.cartelera = data);

        this._ps.getPopulares()
            .subscribe(data => this.populares = data);

        this._ps.getSpanishOriginal()
            .subscribe(data => this.originales = data);


    }



}
