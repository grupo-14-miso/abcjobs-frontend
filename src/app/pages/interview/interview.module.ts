import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewListComponent } from './components/interview-list/interview-list.component';
import { InterviewRoutingModule } from './interview-routing';
import { CoreModule } from "../../core/core.module";
import { InterviewCreateComponent } from './components/interview-create/interview-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        InterviewListComponent,
        InterviewCreateComponent
    ],
    exports: [InterviewListComponent, InterviewCreateComponent],
    imports: [
        CommonModule,
        InterviewRoutingModule,
        CoreModule,
        ReactiveFormsModule,
    ]
})
export class InterviewModule { }
