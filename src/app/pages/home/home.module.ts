import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CoreModule } from "../../core/core.module";
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LogoupUserComponent } from './components/logoup-user/logoup-user.component';

@NgModule({
    declarations: [HomeComponent, LoginComponent, DashboardComponent, LogoupUserComponent],
    providers: [],
    imports: [
        CommonModule,
        HomeRoutingModule,
        CoreModule,
        ReactiveFormsModule
    ]
})
export class HomeModule { }
