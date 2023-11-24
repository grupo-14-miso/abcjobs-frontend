import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectTeamComponent } from './components/project-team/project-team.component';

const routes: Routes = [
  {
      path: "",
      component: ProjectListComponent,
  },
  {
    path: "team/:project",
    component: ProjectTeamComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CompanyRoutingModule { }
