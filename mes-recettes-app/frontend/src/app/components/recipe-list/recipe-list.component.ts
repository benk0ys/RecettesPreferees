import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  loading = true;
  error: string | null = null;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.loadRecipes();
  }

  loadRecipes() {
    this.loading = true;
    this.error = null;
    
    this.recipeService.getRecipes().subscribe({
      next: (recipes) => {
        this.recipes = recipes.sort((a, b) => 
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des recettes:', error);
        this.error = 'Impossible de charger les recettes. Veuillez réessayer.';
        this.loading = false;
      }
    });
  }

  getAuthorDisplayName(authorSub: string): string {
    if (authorSub.startsWith('auth0|') || authorSub.startsWith('google-oauth2|')) {
      return 'Utilisateur connecté';
    }
    return authorSub.length > 20 ? authorSub.substring(0, 20) + '...' : authorSub;
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  trackByRecipeId(index: number, recipe: Recipe): string {
    return recipe.id;
  }
}