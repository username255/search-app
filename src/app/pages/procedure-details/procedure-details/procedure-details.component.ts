import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Procedure } from 'src/app/classes/procedure';

@Component({
  selector: 'app-procedure-details',
  templateUrl: './procedure-details.component.html',
  styleUrls: ['./procedure-details.component.scss']
})
export class ProcedureDetailsComponent implements OnInit {

  procedure!: Procedure;

  constructor(
    private location: Location,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.procedure = this.location.getState() as Procedure;

    if (!this.procedure?.name) {
      // since we don't have a way to query data from server (or there's no easy way...)
      // and we pass the data from the search component by design, we return back to search here
      this.redirectToSearch();
    }
  }

  private redirectToSearch(): void {
    this.router.navigate(['/']);
  }

}
