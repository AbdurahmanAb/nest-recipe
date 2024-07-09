import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { HttpException, Injectable } from '@nestjs/common';
import { LoginDto } from '../dto/login.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({ usernameField: 'email' });
  }

  async validate(email: LoginDto['email'], password: LoginDto['password']) {
    console.log('pop validate local strategy');

    const user = await this.authService.login({ email, password });
    if (!user) throw new HttpException('Invalid credentials', 403);
    return user;
  }
}
