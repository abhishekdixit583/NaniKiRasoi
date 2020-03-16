import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<recipe>();
  recipes: recipe[] = [
    new recipe('Baked potato', 'Perfect your spud technique then pile our filling ideas high.', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/baked-chilli-jacket-potatoes.jpg'),
    new recipe('Burger recipes ', 'Discover our best burger recipes, with everything you\'ll ever need to put inside a bun ', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/mexican-chicken-burger_1.jpg'),
    new recipe('Soup recipes', 'Be bowled over by our nourishing soups. ', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/recipe-image-legacy-id-1074500_11.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipeSelected: recipe) {
    this.recipeWasSelected.emit(recipeSelected);
   }
}
