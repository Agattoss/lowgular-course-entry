import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './ui/home/home.component';
import { EmployeeListComponent } from './ui/employee-list/employee-list.component';
import { EmployeeFormComponent } from './ui/employee-form/employee-form.component';
import { EmployeeDetailComponent } from './ui/employee-detail/employee-detail.component';
import { HomeComponentModule } from './ui/home/home.component-module';
import { EmployeeListComponentModule } from './ui/employee-list/employee-list.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { EmployeeFormComponentModule } from './ui/employee-form/employee-form.component-module';
import { EmployeeDetailComponentModule } from './ui/employee-detail/employee-detail.component-module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'create-employee', component: EmployeeFormComponent },
  { path: 'employee-details/:id/:name', component: EmployeeDetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeComponentModule,
    EmployeeListComponentModule,
    EmployeeServiceModule,
    EmployeeFormComponentModule,
    EmployeeDetailComponentModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
