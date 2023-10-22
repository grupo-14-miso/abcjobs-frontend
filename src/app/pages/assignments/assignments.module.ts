import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignmentListComponent } from './components/assignment-list/assignment-list.component';
import { AssignmentsRoutingModule } from './assignments-routing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AssignmentService } from './services/assignment.service';
import { AssignmentTestComponent } from './components/assignment-test/assignment-test.component';
import { AssignmentResultComponent } from './components/assignment-result/assignment-result.component';

@NgModule({
  imports: [
    CommonModule,
    AssignmentsRoutingModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  declarations: [AssignmentListComponent, AssignmentTestComponent, AssignmentResultComponent],
  exports: [AssignmentListComponent, AssignmentTestComponent, AssignmentResultComponent],
  providers: [AssignmentService],


})
export class AssignmentsModule { }
