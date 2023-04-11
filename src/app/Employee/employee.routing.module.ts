import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from '../Employee/create-employee/create-employee.component';
import { EmployeeDetailsComponent } from '../Employee/employee-details/employee-details.component';
import { EmployeeListComponent } from '../Employee/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from '../Employee/update-employee/update-employee.component';

//import { CustomerListComponent } from './customer-list/customer-list.component';

const routes: Routes = [
  // {
  //   path: '',component: EmployeeListComponent
  // }
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employees/new', component: CreateEmployeeComponent },
  // { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'employees/edit/:id', component: UpdateEmployeeComponent },
  { path: 'employees/:id', component: EmployeeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesRoutingModule {}
