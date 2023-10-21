import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:  '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path:  'search',
    loadChildren: () => import('./pages/search-engine/search-engine.module').then(m => m.SearchEngineModule)
  },
  {
    path:  'assignments',
    loadChildren: () => import('./pages/assignments/assignments.module').then(m => m.AssignmentsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
