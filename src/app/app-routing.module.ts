import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';


const routes: Routes = [
  {
    path:  '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path:  'search',
    loadChildren: () => import('./pages/search-engine/search-engine.module').then(m => m.SearchEngineModule), canActivate: [AuthGuard], data: { roles: ['Company'] }
  },
  {
    path:  'assignments',
    loadChildren: () => import('./pages/assignments/assignments.module').then(m => m.AssignmentsModule), canActivate: [AuthGuard], data: { roles: ['Candidate', 'Company', 'Admin'] }
  },
  {
    path:  'interviews',
    loadChildren: () => import('./pages/interview/interview.module').then(m => m.InterviewModule), canActivate: [AuthGuard], data: { roles: ['Candidate', 'Company', 'Admin'] }
  },
  {
    path:  'users',
    loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule), canActivate: [AuthGuard], data: { roles: ['Candidate'] }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
