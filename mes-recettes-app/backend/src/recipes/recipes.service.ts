import { Injectable } from '@nestjs/common';
import { Recipe } from './recipe.entity';
import { v4 as uuidv4 } from 'uuid';

export interface CreateRecipeDto {
  title: string;
  description?: string;
}

@Injectable()
export class RecipesService {
  private recipes: Recipe[] = [
    new Recipe({
      id: '1',
      title: 'Pâtes Carbonara',
      description: 'Recette traditionnelle italienne avec œufs, pancetta et parmesan',
      author: 'demo-user',
      createdAt: new Date('2024-01-15'),
    }),
    new Recipe({
      id: '2',
      title: 'Ratatouille',
      description: 'Plat provençal aux légumes du soleil',
      author: 'demo-user-2',
      createdAt: new Date('2024-01-20'),
    }),
    new Recipe({
      id: '3',
      title: 'Crêpes Bretonnes',
      description: 'Recette simple et délicieuse pour des crêpes parfaites',
      author: 'demo-user',
      createdAt: new Date('2024-02-01'),
    }),
  ];

  findAll(): Recipe[] {
    return this.recipes;
  }

  create(createRecipeDto: CreateRecipeDto, authorSub: string): Recipe {
    const newRecipe = new Recipe({
      id: uuidv4(),
      ...createRecipeDto,
      author: authorSub,
      createdAt: new Date(),
    });

    this.recipes.push(newRecipe);
    return newRecipe;
  }
}