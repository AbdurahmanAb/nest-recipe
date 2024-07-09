import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '@prisma/client';
import { Observable } from 'rxjs';
import { ROLES_KEY } from 'src/utils/decorators';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly reflactor: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRole = this.reflactor.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]) || [Role.USER];


    
    console.log("Role Is",  requiredRole);
    
    const { user } = context.switchToHttp().getRequest();
    console.log(user);
    
    if (!user) {
      return false;
    }
console.log(requiredRole.some((role) =>{ user.role?.includes(role)

  
}));

    return requiredRole.some((role) => user.role?.includes(role));
  }
}
