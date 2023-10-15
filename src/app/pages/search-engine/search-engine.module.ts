import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { SearchEngineModuleRoutingModule } from './search-engine-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SearchEngineModuleRoutingModule
  ],
  declarations: [
    SearchComponent
  ]
})
export class SearchEngineModule { }
