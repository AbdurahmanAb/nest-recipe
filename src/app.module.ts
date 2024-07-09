import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { RecipeModule } from './recipe/recipe.module';
import { CommentModule } from './comment/comment.module';
import { UserModule } from './user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtGuard } from './auth/guards/jwt.guad';
import { RoleGuard } from './auth/guards/role.guard';
// import { APP_GUARD } from '@nestjs/core';
// import { AuthGuard } from './auth/auth.guard';

import { GatewayModule } from './gateway/gateway.module';
// import { AuthGuard } from './auth/auth.guard';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, RecipeModule, CommentModule, UserModule, AuthModule,JwtModule, GatewayModule ],
  controllers: [AppController],
  providers: [AppService,
    {
    provide:APP_GUARD,
    useClass:JwtGuard
    },
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },

  ],
})
export class AppModule {}
