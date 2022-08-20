import { Directive, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Directive()
export class Unsubscribable implements OnDestroy {
  protected readonly destroyed$: Subject<null> = new Subject<null>();

  ngOnDestroy(): void {
    this.destroyed$.next(null);
  }
}