import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';
@Injectable()
export class FirebaseServiceService {
  foodItems: FirebaseListObservable<Food[]>;

  constructor(private af: AngularFireDatabase) { }

  getFoods() {
      this.foodItems = this.af.list('/food') as FirebaseListObservable<Food[]>;
      return this.foodItems;
  }
  addFood(newFood) {
      return this.foodItems.push(newFood);
  }

}
export interface Food {
  name:string;
  vitamin:string;
  category:string;
}
