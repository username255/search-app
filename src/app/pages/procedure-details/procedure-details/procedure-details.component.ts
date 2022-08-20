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

    if (!this.procedure) {
      this.redirectToSearch();
    }
  }

  private redirectToSearch(): void {
    this.router.navigate(['/']);
  }

}
