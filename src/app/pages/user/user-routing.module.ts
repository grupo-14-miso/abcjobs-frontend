import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { PersonalComponent } from './components/personal/personal.component';
import { AcademicListComponent } from './components/academic-list/academic-list.component';
import { ExperienceListComponent } from './components/experience-list/experience-list.component';
import { LanguagesListComponent } from './components/languages-list/languages-list.component';

const routes: Routes = [
  {
      path: "",
      component: CurriculumComponent,
  },
  {
    path: "personal",
    component: PersonalComponent,
  },
  {
    path: "academic",
    component: AcademicListComponent,
  },
  {
    path: "experience",
    component: ExperienceListComponent,
  },
  {
    path: "languages",
    component: LanguagesListComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }
