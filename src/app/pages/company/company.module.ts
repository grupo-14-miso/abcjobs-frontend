import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyService } from './service/company.service';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectCreateComponent } from './components/project-create/project-create.component';
import { CompanyRoutingModule } from './company-routing.module';
import { CoreModule } from "../../core/core.module";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ProjectListComponent,
        ProjectCreateComponent
    ],
    providers: [CompanyService],
    imports: [
        CommonModule,
        CompanyRoutingModule,
        CoreModule,
        ReactiveFormsModule,
    ]
})
export class CompanyModule { }
