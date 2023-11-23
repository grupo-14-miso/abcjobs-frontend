import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { CoreModule } from "../../core/core.module";
import { ReactiveFormsModule } from '@angular/forms';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { PersonalComponent } from './components/personal/personal.component';
import { AcademicListComponent } from './components/academic-list/academic-list.component';
import { ExperienceListComponent } from './components/experience-list/experience-list.component';
import { LanguagesListComponent } from './components/languages-list/languages-list.component';
import { AcademicCreateComponent } from './components/academic-create/academic-create.component';
import { ExperienceCreateComponent } from './components/experience-create/experience-create.component';

@NgModule({
    declarations: [
      CurriculumComponent,
      PersonalComponent,
      AcademicListComponent,
      AcademicCreateComponent,
      ExperienceListComponent,
      ExperienceCreateComponent,
      LanguagesListComponent],
    imports: [
        CommonModule,
        UserRoutingModule,
        CoreModule,
        ReactiveFormsModule,
    ]
})
export class UserModule { }
