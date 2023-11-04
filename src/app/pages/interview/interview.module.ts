import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewListComponent } from './components/interview-list/interview-list.component';
import { InterviewRoutingModule } from './interview-routing';
import { CoreModule } from "../../core/core.module";

@NgModule({
    declarations: [
        InterviewListComponent
    ],
    exports: [InterviewListComponent],
    imports: [
        CommonModule,
        InterviewRoutingModule,
        CoreModule
    ]
})
export class InterviewModule { }
