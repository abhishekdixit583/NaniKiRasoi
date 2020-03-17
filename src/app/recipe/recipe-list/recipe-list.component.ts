import { Component, OnInit} from '@angular/core';
import { RecipeListService } from '../recipe-list-service';
import { recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers: [RecipeListService]
})
export class RecipeListComponent implements OnInit {
  recipes: recipe[];
  constructor(private recipeService: RecipeListService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipe();
  }

}
