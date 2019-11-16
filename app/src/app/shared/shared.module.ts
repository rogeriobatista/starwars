import { NgModule } from '@angular/core';
import { LoaderComponent } from './loader/loader.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { PaginationComponent } from './pagination/pagination.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppRoutingModule } from '../app-routing.module';
import { Interceptor } from '../helpers/http/interceptor.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoaderService } from './loader/loader.service';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        LoaderComponent,
        HeaderComponent,
        BreadcrumbComponent,
        FooterComponent,
        SearchComponent,
        PaginationComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        BrowserModule,
        MatProgressSpinnerModule,
        AppRoutingModule,
        Interceptor,
        HttpClientModule,
        NgbModule
    ],
    exports: [
        LoaderComponent,
        HeaderComponent,
        BreadcrumbComponent,
        FooterComponent,
        SearchComponent,
        PaginationComponent
    ],
    providers: [LoaderService]
})
export class SharedModule { }