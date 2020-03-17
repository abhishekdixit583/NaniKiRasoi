import { Component, OnInit, Input } from '@angular/core';
import { recipe } from '../recipe.model';
import { RecipeListService } from '../recipe-list-service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  @Input() recipes: recipe;

  constructor(private recipeSelected: RecipeListService) { }

  ngOnInit() {
  }

}
