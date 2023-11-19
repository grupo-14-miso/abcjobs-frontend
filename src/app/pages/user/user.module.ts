import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { CoreModule } from "../../core/core.module";
import { ReactiveFormsModule } from '@angular/forms';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { PersonalComponent } from './components/personal/personal.component';

@NgModule({
    declarations: [
      CurriculumComponent,
      PersonalComponent],
    imports: [
        CommonModule,
        UserRoutingModule,
        CoreModule,
        ReactiveFormsModule,
    ]
})
export class UserModule { }
