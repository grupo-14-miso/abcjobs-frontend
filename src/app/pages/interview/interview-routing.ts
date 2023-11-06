import { Routes, RouterModule } from '@angular/router';
import { InterviewListComponent } from './components/interview-list/interview-list.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: InterviewListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class InterviewRoutingModule { }
