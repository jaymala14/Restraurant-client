import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Restaurant } from '../restaurant.model';

@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.css']
})
export class RestaurantsListComponent implements OnInit {
  restaurants:Restaurant[] = [];
  constructor(private http:HttpClient) { }

  ngOnInit() {

    this.fetchRestaurants();

  }

  private fetchRestaurants(){
    this.http.get<Restaurant[]>('http://localhost:3020/api/v1/restaurant')
    .subscribe(restaurants => {
      console.log(restaurants);
      this.restaurants = restaurants
    })
  }

}
