import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

const validateEnum = {
  success: 'SUCCESS',
  notFound: 'NOT_FOUND',
  basPass: 'BAD_PASS',
} as const;

type ValidateEnum = typeof validateEnum;
type ValidateEnumValues = ValidateEnum[keyof ValidateEnum]

@Injectable()
export class AuthService {
  constructor(private users: UsersService) {}

  validateEnum = validateEnum;

  async validateUser(email: string, pass: string): Promise<ValidateEnumValues> {
    const user = await this.users.findOneByEmail(email).then();

    if (!user) return this.validateEnum.notFound;

    if (await bcrypt.compare(user.password, pass)) return this.validateEnum.success;

    return this.validateEnum.basPass;
  }
}
