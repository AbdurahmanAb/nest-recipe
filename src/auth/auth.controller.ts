import { Body, Controller, Get, Post, Req, UnauthorizedException, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Public } from 'src/utils/decorators';
import { AuthGuard } from '@nestjs/passport';
import { LocalGuard } from './guards/local.guard';
import { JwtGuard } from './guards/jwt.guad';
import { Request } from 'express';
import { RefreshGuard } from './guards/refresh.guard';
import { User } from '@prisma/client';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  @Public()
  @UsePipes(new ValidationPipe())
  @UseGuards(LocalGuard)
  login(@Body() loginDto:LoginDto ) {
  
    return this.authService.login(loginDto);
  }




 @Post('refresh')
 @Public()
 @UseGuards(RefreshGuard)
 async refresh(@Req() req: Request) {
  const result =  this.authService.refresh(req.user as User);
  if (result) {
      return result;
  } else {
      throw new UnauthorizedException('Unable to refresh token');
  }
 }

  @Get('status')
  @UseGuards(JwtGuard)
  status(@Req() req: Request) {
    console.log('Inside AuthController status method');
    console.log(req.user);
    return req.user;
  }

}
