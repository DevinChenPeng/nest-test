import { defineEntity } from '@mikro-orm/core';
import { BaseEntity } from '../../../common/entities/base-entity';

export class User extends BaseEntity {
  name!: string;
  email!: string;
  password!: string;
}

export const UserSchema = defineEntity({
  class: User,
  name: 'User',
  extends: BaseEntity,
  properties: {
    name: { type: 'string', length: 255 },
    email: { type: 'string', length: 255 },
    password: { type: 'string', length: 255 },
  },
});
