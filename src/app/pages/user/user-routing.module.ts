import { Routes, RouterModule } from '@angular/router';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'create',
    component: UserCreateComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }
