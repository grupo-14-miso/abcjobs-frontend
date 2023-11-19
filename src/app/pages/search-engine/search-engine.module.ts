import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { SearchEngineRoutingModule } from './search-engine-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService } from '../user/services/user.service';
import { SearchListComponent } from './components/search-list/search-list.component';
import { SearchDetailComponent } from './components/search-detail/search-detail.component';
import { CoreModule } from "../../core/core.module";
import { SearchSelectComponent } from './components/search-select/search-select.component';


@NgModule({
    declarations: [
        SearchComponent,
        SearchListComponent,
        SearchDetailComponent,
        SearchSelectComponent
    ],
    exports: [SearchComponent, SearchListComponent, SearchDetailComponent, SearchSelectComponent],
    providers: [UserService],
    imports: [
        CommonModule,
        SearchEngineRoutingModule,
        ReactiveFormsModule,
        RouterModule,
        CoreModule
    ]
})
export class SearchEngineModule { }
