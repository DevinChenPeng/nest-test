import { defineEntity, p } from '@mikro-orm/core';
import { BaseEntity } from '../../common/entities/base-entity';

export class Todo extends BaseEntity {
  title!: string;
  content!: string;
  done!: boolean;
}

export const TodoSchema = defineEntity({
  class: Todo,
  name: 'Todo',
  extends: BaseEntity,
  properties: {
    title: p.string().length(255),
    content: p.text(),
    done: p.boolean(),
  },
});
