import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignmentListComponent } from './components/assignment-list/assignment-list.component';
import { AssignmentsRoutingModule } from './assignments-routing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AssignmentService } from './services/assignment.service';

@NgModule({
  imports: [
    CommonModule,
    AssignmentsRoutingModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  declarations: [AssignmentListComponent],
  exports: [AssignmentListComponent],
  providers: [AssignmentService],


})
export class AssignmentsModule { }
