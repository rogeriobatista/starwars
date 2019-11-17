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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PersonDetailsComponent } from './person/details/person-details.component';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { VehicleComponent } from './vehicle/vehicle.component';
import VehicleService from './vehicle/vehicle.service';
import { PlanetComponent } from './planet/planet.component';
import PlanetService from './planet/planet.service';
import { StarshipComponent } from './starship/starship.component';
import StarshipService from './starship/starship.service';
import { SpecieComponent } from './specie/specie.component';
import SpecieService from './specie/specie.service';
import { FilmComponent } from './film/film.component';
import FilmService from './film/film.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonComponent,
    PersonDetailsComponent,
    VehicleComponent,
    PlanetComponent,
    StarshipComponent,
    SpecieComponent,
    FilmComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    Interceptor,
    HttpClientModule,
    NgbModule,
    SharedModule
  ],
  providers: [PersonService, VehicleService, PlanetService, StarshipService, SpecieService, FilmService, GoogleImageSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
