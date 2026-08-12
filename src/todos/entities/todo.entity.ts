import { randomUUID } from 'node:crypto';
import { defineEntity, type InferEntity, p } from '@mikro-orm/core';

export const TodoSchema = defineEntity({
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

export type Todo = InferEntity<typeof TodoSchema>;
