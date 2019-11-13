import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonDetailsComponent } from './person/details/person-details.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{
  path: ':id',
  component: PersonDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
