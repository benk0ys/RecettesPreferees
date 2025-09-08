export interface Recipe {
  id: string;
  title: string;
  description?: string;
  author: string;
  createdAt: Date;
}

export interface CreateRecipeDto {
  title: string;
  description?: string;
}