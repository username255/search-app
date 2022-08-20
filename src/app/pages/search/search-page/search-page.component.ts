import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Observable, switchMap, take } from 'rxjs';
import { Procedure } from 'src/app/classes/procedure';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements AfterViewInit {

  searchTerm: FormControl = new FormControl('');

  data$: Observable<Procedure[]>;

  constructor(
    private readonly dataService: DataService,
  ) {
    this.data$ = this.dataService.mem$;
    this.dataService.term$.pipe(
      take(1),
    ).subscribe(
      (term: string) => this.searchTerm.setValue(term),
    );
  }

  ngAfterViewInit(): void {
    this.searchTerm.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(300),
      switchMap((term) => this.dataService.getItems(term)),
    ).subscribe();
  }

}
