import {Component} from '@angular/core';
import {Ingredient} from "../shared/ingredients.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  ingredients = [
    new Ingredient("Apple", 3),
    new Ingredient("Orange", 5),
    new Ingredient("Banana", 2),
  ];
}
