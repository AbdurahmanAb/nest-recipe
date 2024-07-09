import { SetMetadata} from '@nestjs/common'
import { ROLE } from './role-enum';

//declare @Public() decorator
export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

//declare @Roles() decorator
export const ROLES_KEY = 'role';
export const Roles = (...role: ROLE[]) => SetMetadata(ROLES_KEY, role);