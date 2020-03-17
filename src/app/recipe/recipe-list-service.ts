import { recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';


export class RecipeListService {

  recipeSelected = new EventEmitter<recipe>();
  private recipes: recipe[] = [
    new recipe('Baked potato', 'Perfect your spud technique then pile our filling ideas high.', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/baked-chilli-jacket-potatoes.jpg'),
    new recipe('Burger recipes ', 'Discover our best burger recipes, with everything you\'ll ever need to put inside a bun ', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/mexican-chicken-burger_1.jpg'),
    new recipe('Soup recipes', 'Be bowled over by our nourishing soups. ', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/recipe-image-legacy-id-1074500_11.jpg')
  ];

  getRecipe() {
    return this.recipes.slice();
  }

  addRecipe() {

  }

}
