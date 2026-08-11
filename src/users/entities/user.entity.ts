import { OptionalProps } from '@mikro-orm/core';
import { Entity, PrimaryKey, Property } from '@mikro-orm/decorators/legacy';

@Entity()
export class User {
  // 创建时无需提供的字段
  [OptionalProps]?: 'createdAt' | 'updatedAt';

  @PrimaryKey()
  id!: number;

  @Property({ unique: true, length: 255 })
  email!: string;

  @Property({ length: 50 })
  name!: string;

  // reflect-metadata 无法推断 Date 类型，需显式声明
  @Property({ type: 'date', onCreate: () => new Date() })
  createdAt!: Date;

  @Property({
    type: 'date',
    onCreate: () => new Date(),
    onUpdate: () => new Date(),
  })
  updatedAt!: Date;
}
