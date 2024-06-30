import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { RecipeModule } from './recipe/recipe.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, RecipeModule, CommentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
