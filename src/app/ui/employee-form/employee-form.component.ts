import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { CreateEmployeeModel } from '../../model/create-employee.model';

@Component({
  selector: 'employee-form',
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent {
  readonly employeeForm: FormGroup = new FormGroup(
    {
      name: new FormControl(null, [Validators.required]),
      age: new FormControl(null, [Validators.min(0)]),
      salary: new FormControl(null, [Validators.min(0), Validators.required])
    });

  constructor(private _employeeService: EmployeeService) {
  }

  onFormSubmitted(form: CreateEmployeeModel) {
   return this._employeeService.create
   ({name: form.name, age: form.age, salary: form.salary}).subscribe
   ({complete: () => alert(`User was successfully added to the database. Name: ${this.employeeForm.value.name}, Age: ${this.employeeForm.value.age}, Salary: ${this.employeeForm.value.salary}`)} );
  }

}
