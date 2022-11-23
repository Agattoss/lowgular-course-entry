import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { EmployeeDetailParamsModel } from '../../model/employee-detail-params.model';

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
  constructor(private _activatedRoute: ActivatedRoute) {}
}
