import { Component, OnInit } from '@angular/core';
import { recipe } from './recipe-list/recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipeItemSelected: recipe;
  constructor() { }

  ngOnInit(): void {
  }

}
