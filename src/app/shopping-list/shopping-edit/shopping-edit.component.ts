import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  /*@Output() addEvent = new EventEmitter<Ingredient>();*/
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addIngredient(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    // this.addEvent.emit(new Ingredient(nameInput.value, amountInput.valueAsNumber));
    this.shoppingListService.addIngredient(new Ingredient(nameInput.value, amountInput.valueAsNumber));
  }
}
