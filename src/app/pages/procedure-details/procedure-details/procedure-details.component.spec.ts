import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedureDetailsComponent } from './procedure-details.component';

describe('ProcedureDetailsComponent', () => {
  let component: ProcedureDetailsComponent;
  let fixture: ComponentFixture<ProcedureDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcedureDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcedureDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
