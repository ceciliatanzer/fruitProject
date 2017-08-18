import { Component } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { FirebaseServiceService } from './Services/firebase-service.service';
import * as firebase from 'firebase/app';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirebaseServiceService]
})


export class AppComponent implements OnInit{
  title = 'app';
  items:FirebaseListObservable<any[]>;
  foodItems:Food[];
  appState: string;
  activeKey: string;
  nameFruit:string;
  vitaminFruit:string;
  categoryArray:Array<String>;
  filterArray:Array<String>;
  testVal:string;
  filterVal:string;
  constructor(private _firebaseService: FirebaseServiceService){
    // this.items = this.af.list('/item');
  }

  ngOnInit() {
    this.filterVal = 'Fruit';
    this._firebaseService.getFoods(this.filterVal).subscribe(foodItems=>{
      this.foodItems = foodItems;
    })
    this.nameFruit = '';
    this.vitaminFruit = '';
    this.categoryArray=new Array();
    this.categoryArray.push('Fruit');
    this.categoryArray.push('Vegetable');
    this.testVal = 'Fruit';
    this.filterVal = 'All';
    this.filterArray=new Array();
    this.filterArray.push('All');
    this.filterArray.push('Fruit');
    this.filterArray.push('Vegetable');

  }
getFoods(){
  
   this._firebaseService.getFoods( this.filterVal).subscribe(foodItems=>{
      this.foodItems = foodItems;
    })

}

  changeState(state, key = null) {
    if (key) {
      this.activeKey = key;
    }
    this.appState = state;
  }
  addFood(name: string, vitamin:string, category: string) {

    var newFood = {
      "name":name,
      "vitamin":vitamin,
      "category":category

    }

    this._firebaseService.addFood(newFood);
    this.changeState('default');
  }
  appendFruit(curSelect){
    this.addFood(this.nameFruit,this.vitaminFruit,this.testVal);

  }
  deleteItem(val){
    console.log(val.name);
   this._firebaseService.deleteFood(val.name);

  }
}

export interface Food {
  name:string;
  vitamin:string;
  category:string;
}
