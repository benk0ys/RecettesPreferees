import { Controller, Get, Post, Body, UseGuards, Req } from '@nestjs/common';
import * as recipesService_1 from './recipes.service';
import { Recipe } from './recipe.entity';
import { AuthGuard } from '../auth/auth.guard';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: recipesService_1.RecipesService) {}

  @Get()
  findAll(): Recipe[] {
    return this.recipesService.findAll();
  }

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() createRecipeDto: recipesService_1.CreateRecipeDto, @Req() req: any): Recipe {
    const authorSub = req.user.sub; // Récupéré du token JWT
    return this.recipesService.create(createRecipeDto, authorSub);
  }
}