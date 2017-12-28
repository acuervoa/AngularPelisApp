import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { SearchComponent } from "./components/search/search.component";
import { DetailsComponent } from "./components/details/details.component";


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'search/:texto', component: SearchComponent },
  { path: 'pelicula/:id/:pag', component: DetailsComponent },
  { path: 'pelicula/:id/:pag/:busqueda', component: DetailsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
