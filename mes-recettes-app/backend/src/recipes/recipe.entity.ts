export class Recipe {
  id: string;
  title: string;
  description?: string;
  author: string; // Auth0 sub de l'auteur
  createdAt: Date;

  constructor(partial: Partial<Recipe>) {
    Object.assign(this, partial);
  }
}