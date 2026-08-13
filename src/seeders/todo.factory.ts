import { faker } from '@faker-js/faker';
import type { EntityData } from '@mikro-orm/core';
import { Factory } from '@mikro-orm/seeder';
import { Todo } from '../todos/entities/todo.entity';

export class TodoFactory extends Factory<Todo> {
  readonly model = Todo;

  protected definition(): EntityData<Todo> {
    return {
      title: faker.lorem.sentence({ min: 3, max: 8 }),
      content: faker.lorem.paragraph(),
      done: faker.datatype.boolean(),
      deletedAt: null,
    };
  }
}
