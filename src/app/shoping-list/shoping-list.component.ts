import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../shared/ingredent.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {

  ingredents: Ingredient[] = [new Ingredient('apple', 5),
  new Ingredient('tomatos', 5)];
  constructor() { }
  ngOnInit(): void {
  }
  onIngredentAddedd( ingredent: Ingredient){
      this.ingredents.push(ingredent);
  }
}
