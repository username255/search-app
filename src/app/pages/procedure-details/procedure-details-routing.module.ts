import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcedureDetailsComponent } from './procedure-details/procedure-details.component';

const routes: Routes = [{
  path: '',
  component: ProcedureDetailsComponent,
}, {
  path: '**',
  redirectTo: '/',
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcedureDetailsRoutingModule { }
