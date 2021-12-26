import { Ingredient } from 'src/app/shared/ingredient.model';
import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: true}) nameInputref!: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInputRef!: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  onAddItem() {
    const ingName = this.nameInputref.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngrediet = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngrediet);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
