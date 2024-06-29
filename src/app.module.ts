import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { RecipeModule } from './recipe/recipe.module';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, RecipeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
