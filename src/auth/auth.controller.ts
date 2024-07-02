import { Body, Controller, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Public } from 'src/utils/decorators';
import { AuthGuard } from '@nestjs/passport';
import { LocalGuard } from './guards/local.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  @Public()
  // @UseGuards(LocalGuard)
  @UsePipes(new ValidationPipe())
  login(@Body() loginDto:LoginDto ) {
  
    return this.authService.login(loginDto);
  }

}
