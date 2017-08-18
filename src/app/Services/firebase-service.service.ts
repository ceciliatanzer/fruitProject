import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';
@Injectable()
export class FirebaseServiceService {
  foodItems: FirebaseListObservable<Food[]>;

  constructor(private af: AngularFireDatabase) { }

  getFoods(category) {
    console.log(category);
      
      
        if (category != null) {
          if(category == 'All'){
            this.foodItems = this.af.list('/food') as FirebaseListObservable<Food[]>;
          }else{
           this.foodItems = this.af.list('/food',{
              query: {
                    orderByChild: 'category',
                    equalTo: category
                }
           }) as FirebaseListObservable<Food[]>;
         }  
        } else {
            this.foodItems = this.af.list('/food') as FirebaseListObservable<Food[]>;
        }
        return this.foodItems;
  }

  addFood(newFood) {
      return this.foodItems.push(newFood);
  }
  deleteFood(index){
    console.log(index);
    this.foodItems.remove(index);
    console.log(this.af.list('/food').remove(index));
  }

}
export interface Food {
  name:string;
  vitamin:string;
  category:string;
}
