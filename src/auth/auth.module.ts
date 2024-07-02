import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import {JwtModule} from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports:[PrismaModule,
PassportModule,
    JwtModule.registerAsync({
      imports:[ConfigModule],
      useFactory:async (configService:ConfigService)=>({
        secret:configService.get('JWT'),
        signOptions:{
          expiresIn:'3600s'
        }
      }),
    inject:[ConfigService]
  
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
