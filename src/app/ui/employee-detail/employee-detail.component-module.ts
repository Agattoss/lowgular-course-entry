import { NgModule } from '@angular/core';
import { EmployeeDetailComponent } from './employee-detail.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [EmployeeDetailComponent],
  providers: [],
  exports: [EmployeeDetailComponent],
})
export class EmployeeDetailComponentModule {}
