import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignmentListComponent } from './components/assignment-list/assignment-list.component';
import { AssignmentsRoutingModule } from './assignments-routing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AssignmentService } from './services/assignment.service';
import { AssignmentTestComponent } from './components/assignment-test/assignment-test.component';
import { AssignmentResultComponent } from './components/assignment-result/assignment-result.component';
import { CoreModule } from "../../core/core.module";
import { TranslatePipe } from 'src/app/core/template/pipes/translate.pipe';
import { AssignmentCreateComponent } from './components/assignment-create/assignment-create.component';

@NgModule({
    declarations: [
      AssignmentListComponent,
      AssignmentTestComponent,
      AssignmentResultComponent,
      AssignmentCreateComponent],
    exports: [
      AssignmentListComponent,
      AssignmentTestComponent,
      AssignmentResultComponent],
    providers: [AssignmentService],
    imports: [
        CommonModule,
        AssignmentsRoutingModule,
        ReactiveFormsModule,
        RouterModule,
        CoreModule
    ]
})
export class AssignmentsModule { }
