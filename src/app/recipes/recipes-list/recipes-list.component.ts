import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Name',
      'A Test Decription',
      'https://www.modernhoney.com/wp-content/uploads/2018/03/The-Best-Chicken-Marinade-Recipe-1200x856.jpg'
    ),
    new Recipe(
      'A Test Name',
      'A Test Decription',
      'https://www.modernhoney.com/wp-content/uploads/2018/03/The-Best-Chicken-Marinade-Recipe-1200x856.jpg'
    ),
  ];
}
