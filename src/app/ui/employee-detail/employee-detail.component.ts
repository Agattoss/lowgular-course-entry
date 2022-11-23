import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { EmployeeDetailParamsModel } from '../../model/employee-detail-params.model';
import { PersonModel } from '../../model/person.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeDetailComponent {
  readonly params$: Observable<EmployeeDetailParamsModel> =
    this._activatedRoute.params.pipe(
      map((params) => ({ id: params['id'], name: params['name'] }))
    );
  readonly details$: Observable<PersonModel> = this._activatedRoute.params.pipe(
    switchMap((data) => this._employeeService.getOne(data['id']))
  );

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _employeeService: EmployeeService
  ) {}
}
