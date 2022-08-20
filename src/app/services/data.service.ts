import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of, tap } from 'rxjs';
import { Procedure } from '../classes/procedure';
import { IProcedure } from '../interfaces/procedure';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly _mem$: BehaviorSubject<any> = new BehaviorSubject([]);
  private readonly _term$: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(
    private readonly http: HttpClient,
  ) { }

  public getItems(term: string): Observable<Procedure[]> {
    this._term$.next(term);

    if (!term) {
      this._mem$.next([]);
      return of([]);
    }

    return this.http.get<any>(this.apiUrl(term)).pipe(
      map((obj) => (obj as any)?.items || []),
      map((items) => items.map((item: IProcedure) => new Procedure(item))),
      tap((data) => this._mem$.next(data)),
    );
  }

  public get mem$(): Observable<Procedure[]> {
    return this._mem$.asObservable();
  }

  public get term$(): Observable<string> {
    return this._term$.asObservable();
  }
  
  private apiUrl(term: string): string {
    const urlEncodedTerm: string = encodeURIComponent(term);
    return `https://terms.myorb.com:9000/browser/MAIN/descriptions?term=${urlEncodedTerm}&sematicTags=procedure&active=true&conceptActive=true&lang=english&limit=200&off set=0&groupByConcept=true`;
  }
}
