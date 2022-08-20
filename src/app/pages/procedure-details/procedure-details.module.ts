import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcedureDetailsRoutingModule } from './procedure-details-routing.module';
import { ProcedureDetailsComponent } from './procedure-details/procedure-details.component';
import { DataService } from 'src/app/services/data.service';


@NgModule({
  declarations: [
    ProcedureDetailsComponent
  ],
  imports: [
    CommonModule,
    ProcedureDetailsRoutingModule
  ],
  providers: [
    DataService,
  ],
})
export class ProcedureDetailsModule { }
