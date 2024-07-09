import {
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(
    loginDto: LoginDto,
  ): Promise<{ access_token: string; user: User; refresh_token: string }> {
    console.log('pop login service');

    const user = await this.prisma.user.findUnique({
      where: {
        email: loginDto.email,
        password: loginDto.password,
      },
    });

    if (user) {
      const payload = {
        email: loginDto.email,
        sub: user.id,
        role: user.role,
        name: user.name,
      };
      return {
        access_token: this.jwtService.sign(payload),
        refresh_token: this.jwtService.sign(payload, { expiresIn: '7d' }),
        user: user,
      };
    }
  }

  refresh(user: any): { access_token: string } {
    if (user) {
      const payload = {
        email: user.email,
        sub: user.id,
        role: user.role,
        name: user.name,
      };
      //    console.log(this.jwtService.sign(payload),);
      return {
        access_token: this.jwtService.sign(payload),
      };
    } else {
      return { access_token: '' };
    }
  }
}
