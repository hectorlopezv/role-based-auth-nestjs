import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { ROLES } from 'src/auth/roles/roles';
import { UserService } from 'src/user/user.service';
@Injectable()
export class AdminRoleGuard implements CanActivate {
  constructor(private readonly userService: UserService) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    if (request?.user) {
      const { id } = request.user;
      const user = await this.userService.getUserById(id);
      return user.role === ROLES.ADMIN;
    }
    return false;
  }
}
