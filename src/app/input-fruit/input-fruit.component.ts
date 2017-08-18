import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inputfruit',
  templateUrl: './input-fruit.component.html',
  styleUrls: ['./input-fruit.component.css']
})
export class InputFruitComponent implements OnInit {
  fruitArray:Array<Object>;

  nameFruit:string;
  vitaminFruit:string;
  categoryArray:Array<String>;
  testVal:string;
  constructor() {
    this.fruitArray = new Array<Object>();






  }
  appendFruit(curSelect){
    this.createFruit(this.nameFruit,this.vitaminFruit,this.testVal);
    console.log(this.fruitArray);

  }
  createFruit(name:string,vitamin:string,category:string):void{
    let fruit:Object = {'name':name,'vitamin':vitamin,'category':category};
    this.fruitArray;
    this.fruitArray.push(fruit);
  }

  ngOnInit() {
    this.nameFruit = '';
    this.vitaminFruit = '';
    this.categoryArray=new Array();
    this.categoryArray.push('Fruit');
    this.categoryArray.push('Vegetable');
    this.testVal = 'Fruits';

  }

}
