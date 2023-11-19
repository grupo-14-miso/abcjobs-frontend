import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { PersonalComponent } from './components/personal/personal.component';

const routes: Routes = [
  {
      path: "",
      component: CurriculumComponent,
  },
  {
    path: "personal",
    component: PersonalComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }
