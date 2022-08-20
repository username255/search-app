import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchPageComponent } from './search-page/search-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';


@NgModule({
  declarations: [
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    DataService,
  ],
})
export class SearchModule { }
