import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PersonComponent } from "./person/person.component";
import PersonService from './person/person.service';
import { HttpClientModule } from '@angular/common/http';
import { Interceptor } from './helpers/http/interceptor.module';
import GoogleImageSearchService from './helpers/google-images/google-images.service';
import { HeaderComponent } from './shared/header/header.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PersonDetailsComponent } from './person/details/person-details.component';
import { SearchComponent } from './shared/search/search.component';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderComponent } from './shared/loader/loader.component';
import { LoaderService } from './shared/loader/loader.service';
import { VehicleComponent } from './vehicle/vehicle.component';
import VehicleService from './vehicle/vehicle.service';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    LoaderComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    PaginationComponent,
    AppComponent,
    HomeComponent,
    PersonComponent,
    PersonDetailsComponent,
    VehicleComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    Interceptor,
    HttpClientModule,
    NgbModule
  ],
  providers: [PersonService, VehicleService, GoogleImageSearchService, LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
