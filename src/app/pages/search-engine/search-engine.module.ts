import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { SearchEngineRoutingModule } from './search-engine-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService } from './services/user.service';
import { SearchListComponent } from './components/search-list/search-list.component';
import { SearchDetailComponent } from './components/search-detail/search-detail.component';
import { CoreModule } from "../../core/core.module";


@NgModule({
    declarations: [
        SearchComponent,
        SearchListComponent,
        SearchDetailComponent
    ],
    exports: [SearchComponent, SearchListComponent, SearchDetailComponent],
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
