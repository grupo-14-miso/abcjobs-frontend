import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LogupUserComponent } from './components/logup-user/logup-user.component';
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';
import { LogupCompanyComponent } from './components/logup-company/logup-company.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "login/:role",
    component: LoginComponent,
  },
  {
    path: "logup/user",
    component: LogupUserComponent,
  },
  {
    path: "logup/company",
    component: LogupCompanyComponent,
  },
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  {
    path: "not-authorized",
    component: NotAuthorizedComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }
