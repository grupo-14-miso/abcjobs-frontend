import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CurriculumComponent } from './components/curriculum/curriculum.component';

const routes: Routes = [
  {
      path: "",
      component: CurriculumComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }
