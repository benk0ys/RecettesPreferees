import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent {
  @Output() recipeAdded = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  recipeForm: FormGroup;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private recipeService: RecipeService
  ) {
    this.recipeForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['']
    });
  }

  onSubmit() {
  console.log("🚀 onSubmit déclenché !", this.recipeForm.value);
  if (this.recipeForm.valid) {
    this.isSubmitting = true;
    this.recipeService.createRecipe(this.recipeForm.value).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.router.navigateByUrl('/recettes');
      },
      error: () => {
        this.isSubmitting = false;
        console.error("❌ Erreur lors de l'ajout de la recette");
      }
    });
  }
}


  onCancel() {
    this.router.navigateByUrl('/recettes');
  }
}