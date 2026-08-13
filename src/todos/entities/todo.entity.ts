import { randomUUID } from 'node:crypto';
import { defineEntity, OptionalProps, p } from '@mikro-orm/core';

export class Todo {
  [OptionalProps]?: 'id' | 'createdAt' | 'updatedAt' | 'deletedAt';

  id!: string;
  title!: string;
  content!: string;
  done!: boolean;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date | null;
}

export const TodoSchema = defineEntity({
  class: Todo,
  name: 'Todo',
  properties: {
    id: p.string().primary().onCreate(randomUUID),
    title: p.string().length(255),
    content: p.text(),
    done: p.boolean(),
    createdAt: p.datetime().onCreate(() => new Date()),
    updatedAt: p
      .datetime()
      .onCreate(() => new Date())
      .onUpdate(() => new Date()),
    deletedAt: p.datetime().nullable(),
  },
});
