import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from "./components/inicio/inicio.component";
import {BodegaListComponent} from "./components/bodega-list/bodega-list.component";
import {BodegaNewComponent} from "./components/bodega-new/bodega-new.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: 'bodega',
    component: BodegaListComponent,
  },
  {
    path: 'bodega/new',
    component: BodegaNewComponent,
  },
  {
    path: '**',
    redirectTo: 'inicio',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
