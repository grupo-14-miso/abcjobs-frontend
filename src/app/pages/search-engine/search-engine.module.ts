import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { SearchEngineModuleRoutingModule } from './search-engine-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService } from './services/user.service';


@NgModule({
  imports: [
    CommonModule,
    SearchEngineModuleRoutingModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  declarations: [
    SearchComponent
  ],
  exports: [SearchComponent],
  providers: [UserService],

})
export class SearchEngineModule { }
