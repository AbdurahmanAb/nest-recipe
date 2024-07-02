import { HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
constructor(private readonly prisma:PrismaService, private readonly jwtService:JwtService){

}

  async  login(loginDto:LoginDto):Promise<{access_token:string}> {
  
  const user=  await this.prisma.user.findUnique({
      
            where:{
                email:loginDto.email,
                password:loginDto.password            
            }
        })
     if(!user) throw new HttpException('Invalid credentials', 403) 
      const payload={email:loginDto.email, sub:user.id,  role:user.role}  
     return  {
        access_token: this.jwtService.sign(payload)
     }
    }
}
