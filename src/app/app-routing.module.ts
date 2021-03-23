import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantsListComponent } from './restaurant/restaurants-list/restaurants-list.component';


const routes: Routes = [
  { path:'restaurant-list', component:RestaurantsListComponent},
  { path:'restaurant-add', component:RestaurantComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
