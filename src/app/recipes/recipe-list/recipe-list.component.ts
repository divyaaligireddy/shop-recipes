import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelectedEvent = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Chicken Skillet',
      'This is simply a test',
      'http://www.kraftrecipes.com/-/media/assets/recipe_images/pollo-con-queso-y-salsa-111147-600x250.jpg?h=250&w=600&la=en&hash=59A017384020E7E136E1A5EB808962A19C47191A'),
    new Recipe('Chicken Thighs',
      'This is another test',
      'http://del.h-cdn.co/assets/17/34/980x490/landscape-1503418862-chicken-thighs-delish.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelectedEvent.emit(recipe);
  }

}
