import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PuntosColombiaComponent } from './puntos-colombia/puntos-colombia.component';
import { UberComponent } from './uber/uber.component';

const routes: Routes = [
  { path: 'uber', component: UberComponent },
  { path: 'puntos-colombia', component: PuntosColombiaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
