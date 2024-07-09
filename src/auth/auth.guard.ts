// import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
// import { Observable } from 'rxjs';
// import { JwtService } from '@nestjs/jwt';
// import { Request } from 'express';
// import { IS_PUBLIC_KEY } from 'src/utils/decorators';
// import { Reflector } from '@nestjs/core';

// @Injectable()
// export class AuthGuard implements CanActivate {
// constructor(private readonly jwtService:JwtService, private reflector: Reflector){
// }

//  async canActivate(
//     context: ExecutionContext,
//   ):  Promise<boolean>  {

//     const request = context.switchToHttp().getRequest();
//     const token = this.ExtractTOkenFromHeader(request);

//     const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
//       context.getHandler(),
//       context.getClass()
//     ])
//     if(isPublic){
// return true;
//     }
//     if(!token){
//       throw new UnauthorizedException()
//     }
//   try {
//     const payload = await this.jwtService.verifyAsync(token, {
//       secret: process.env.JWT
//     });

//     request['user'] = payload;

//   } catch(e) {
  
//      throw new    UnauthorizedException(e.message)
//   }
//     return true;
//   }

//   private ExtractTOkenFromHeader(request:Request): string{
//    const [type, token] = request.headers.authorization?.split(' ')??[];

//     return type === 'Bearer' ? token : null;
//   }
// }