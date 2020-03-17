import { Component, OnInit } from '@angular/core';
import { RecipeListService } from './recipe-list-service';
import { recipe } from './recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [RecipeListService]
})
export class RecipeComponent implements OnInit {

  recipeItemSelected: recipe;
  constructor(private recipeService: RecipeListService) { }

ngOnInit(): void {
  console.log('ngOnInit----------');
  this.recipeService.recipeSelected.
    subscribe(
      (recipeItem: recipe) => {
        this.recipeItemSelected = recipeItem;
      }
    );
  console.log('Item selected ' + this.recipeItemSelected);

}

}
