import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , FormsModule, Validators} from '@angular/forms';
import { Restaurant } from './restaurant.model';
                                                               
@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  restaurantForm =<any> FormGroup;
  restaurants:Restaurant[] = [];
  constructor(private http:HttpClient) { }

  ngOnInit() {                                                                                                                                                            
    this.restaurantForm = new FormGroup({
      'id': new FormControl(),
      'restaurant_name': new FormControl(null, Validators.required),
      'status': new FormControl(null, Validators.required),
      'photo': new FormControl(null, Validators.required),
      'opening_time': new FormControl(null, Validators.required),
      'closing_time':new FormControl(null,Validators.required)
    })

    this.fetchRestaurants();
  }

  onSubmit(){
    //console.log( this.restaurantForm.value);
     this.http.post('http://localhost:3020/api/v1/restaurant', 
    this.restaurantForm.value
    ).subscribe(response =>{
      console.log(response);
    }) 
  }

  private fetchRestaurants(){
    this.http.get<Restaurant[]>('http://localhost:3020/api/v1/restaurant')
    .subscribe(restaurants => {
      console.log(restaurants);
      this.restaurants = restaurants
    })
  }
  
  deleteRestaurant(id){
    console.log(id);
    let _id = id;
    this.http.delete('http://localhost:3020/api/v1/restaurant/'+ _id)
    .subscribe(rest =>{
      console.log("restaurant deleted");
    })
  }

}
