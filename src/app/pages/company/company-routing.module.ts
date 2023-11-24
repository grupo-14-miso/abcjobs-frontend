import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProjectListComponent } from './components/project-list/project-list.component';

const routes: Routes = [
  {
      path: "",
      component: ProjectListComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CompanyRoutingModule { }
