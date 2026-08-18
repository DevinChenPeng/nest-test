import { Migration } from '@mikro-orm/migrations';

export class Migration20260818144109_create_user extends Migration {
  override name = 'Migration20260818144109_create_user';

  override up(): void | Promise<void> {
    this.addSql(
      `create table \`user\` (\`id\` varchar(255) not null, \`created_at\` datetime not null, \`updated_at\` datetime not null, \`deleted_at\` datetime null, \`name\` varchar(255) not null, \`email\` varchar(255) not null, \`password\` varchar(255) not null, primary key (\`id\`)) default character set utf8mb4 engine = InnoDB;`,
    );
  }

  override down(): void | Promise<void> {
    this.addSql(`drop table if exists \`user\`;`);
  }
}
