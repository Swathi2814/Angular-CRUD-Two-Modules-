import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from '../Employee/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from '../Employee/update-employee/update-employee.component';
import { EmployeeDetailsComponent } from '../Employee/employee-details/employee-details.component';
import { CreateEmployeeComponent } from '../Employee/create-employee/create-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeesRoutingModule } from '../Employee/employee.routing.module';

@NgModule({
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [EmployeeListComponent],
})
export class EmployeesModule {}
