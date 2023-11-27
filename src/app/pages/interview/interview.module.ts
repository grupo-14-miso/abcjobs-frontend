import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewListComponent } from './components/interview-list/interview-list.component';
import { InterviewRoutingModule } from './interview-routing';
import { CoreModule } from "../../core/core.module";
import { InterviewCreateComponent } from './components/interview-create/interview-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InterviewResultComponent } from './components/interview-result/interview-result.component';
import { InterviewResultCreateComponent } from './components/interview-result-create/interview-result-create.component';

@NgModule({
    declarations: [
        InterviewListComponent,
        InterviewCreateComponent,
        InterviewResultComponent,
        InterviewResultCreateComponent
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
