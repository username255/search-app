import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: '/search',
}, {
  path: 'search',
  pathMatch: 'full',
  loadChildren: () => import('./pages/search/search.module').then(m => m.SearchModule),
}, {
  path: 'detail/:id',
  pathMatch: 'prefix',
  loadChildren: () => import('./pages/procedure-details/procedure-details.module').then(m => m.ProcedureDetailsModule),
}, {
  path: '**',
  redirectTo: '/search',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
