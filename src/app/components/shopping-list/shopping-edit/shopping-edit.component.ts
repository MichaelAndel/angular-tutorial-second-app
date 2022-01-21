import { ShoppingListService } from './../services/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: true}) nameInputref!: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInputRef!: ElementRef;

  constructor(private slService: ShoppingListService) { }

  onAddItem() {
    const ingName = this.nameInputref.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.slService.addIngredient(newIngredient)
  }

  ngOnInit(): void {
  }

}
