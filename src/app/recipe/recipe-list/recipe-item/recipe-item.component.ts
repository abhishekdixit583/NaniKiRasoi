import { Component, OnInit, Input } from '@angular/core';
import { RecipeListService } from '../../recipe-list-service';
import { recipe } from '../../recipe.model';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  providers: [RecipeListService]
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: recipe;
  constructor(private recipeService: RecipeListService) { }

  ngOnInit(): void {

  }
  onSelectedItem() {
    this.recipeService.recipeSelected.emit(this.recipeItem);
  }
}
