import { randomUUID } from 'node:crypto';
import { defineEntity, OptionalProps, p } from '@mikro-orm/core';

export abstract class BaseEntity {
  [OptionalProps]?: 'id' | 'createdAt' | 'updatedAt' | 'deletedAt';

  id!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date | null;
}

export const BaseEntitySchema = defineEntity({
  class: BaseEntity,
  name: 'BaseEntity',
  abstract: true,
  properties: {
    id: p.string().primary().onCreate(randomUUID),
    createdAt: p.datetime().onCreate(() => new Date()),
    updatedAt: p
      .datetime()
      .onCreate(() => new Date())
      .onUpdate(() => new Date()),
    deletedAt: p.datetime().nullable(),
  },
});
