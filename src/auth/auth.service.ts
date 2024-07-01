import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
constructor(private readonly prisma:PrismaService){

}

    login(loginDto:LoginDto) {
    return    this.prisma.user.findUnique({
      
            where:{
                email:loginDto.email,
                password:loginDto.password            
            }
        })
    }
}
