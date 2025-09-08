import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/recipe-list/recipe-list.component').then(m => m.RecipeListComponent)
  },
  {
    path: 'recettes',
    loadComponent: () =>
      import('./components/recipe-list/recipe-list.component').then(m => m.RecipeListComponent)
  },
  {
    path: 'ajouter',
    loadComponent: () =>
      import('./components/recipe-form/recipe-form.component').then(m => m.RecipeFormComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

