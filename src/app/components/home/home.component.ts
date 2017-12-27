import { Component } from '@angular/core';
import { PeliculasService } from "../../providers/peliculas.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  cartelera:any;

  constructor(private _ps: PeliculasService) {

      this._ps.getCartelera()
            .subscribe( data => {
                console.log(data );
                this.cartelera = data;
            })

  }



}
