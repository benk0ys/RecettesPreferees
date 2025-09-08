import { Module } from '@nestjs/common';
import { RecipesModule } from './recipes/recipes.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    RecipesModule,
    AuthModule,
    // Ajoute ici d'autres modules si besoin (ConfigModule, etc.)
  ],
})
export class AppModule {}