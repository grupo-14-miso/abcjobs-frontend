import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserRoutingModule } from './user-routing.module';
import { CoreModule } from "../../core/core.module";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [UserCreateComponent],
    imports: [
        CommonModule,
        UserRoutingModule,
        CoreModule,
        ReactiveFormsModule,
    ]
})
export class UserModule { }
