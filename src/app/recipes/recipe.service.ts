import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Chicken Skillet',
      'This is simply a test',
      'http://www.kraftrecipes.com/-/media/assets/recipe_images/pollo-con-queso-y-salsa-' +
      '111147-600x250.jpg?h=250&w=600&la=en&hash=59A017384020E7E136E1A5EB808962A19C47191A', [
        new Ingredient('Chicken', 1),
        new Ingredient('Pasta', 5)
      ]),
    new Recipe('Chicken Thighs',
      'This is another test',
      'http://del.h-cdn.co/assets/17/34/980x490/landscape-1503418862-chicken-thighs-delish.jpg', [
        new Ingredient('Chicken Thighs', 2),
        new Ingredient('Rice', 1)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
    // return new array which is exact copy of recipes
    // list, so that the actual list cannot be modified.
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
