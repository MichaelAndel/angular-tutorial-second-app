import { ShoppingListService } from './../../shopping-list/services/shopping-list.service';
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";

import { Recipe } from "../recipe.model";
@Injectable({providedIn: 'root'})
export class RecipeService {
  public recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
     'A super tasty schnitzel - just awesome!',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tunnel-vienna-live.at%2Fwp-content%2Fuploads%2F2017%2F10%2Fschnitz.jpg&f=1&nofb=1',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French fries', 20)
      ]),
    new Recipe(
      'Big fat Burger',
     'What else do you need to say',
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fdinnerthendessert.com%2Fwp-content%2Fuploads%2F2017%2F05%2FPhilly-Cheese-Steak-Burger-2-680x1020.jpg&f=1&nofb=1',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
        new Ingredient('Cheese', 1),
        new Ingredient('Salad', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {

  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  getRecipes() {
    return this.recipes.slice();
  }
}
