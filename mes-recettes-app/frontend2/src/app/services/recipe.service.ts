import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe, CreateRecipeDto } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl = 'http://localhost:3000/recipes';

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.apiUrl);
  }

  createRecipe(recipe: CreateRecipeDto): Observable<Recipe> {
    return this.http.post<Recipe>(this.apiUrl, recipe);
  }

  addRecipe(recipe: Partial<Recipe>): Observable<Recipe> {
    return this.http.post<Recipe>('/api/recipes', recipe);
  }
}