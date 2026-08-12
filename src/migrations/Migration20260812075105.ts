import { Migration } from '@mikro-orm/migrations';

export class Migration20260812075105 extends Migration {
  override name = 'Migration20260812075105';

  override up(): void | Promise<void> {
    this.addSql(
      `create table \`todo\` (\`id\` varchar(255) not null, \`title\` varchar(255) not null, \`content\` text not null, \`done\` tinyint(1) not null, \`created_at\` datetime not null, \`updated_at\` datetime not null, \`deleted_at\` datetime null, primary key (\`id\`)) default character set utf8mb4 engine = InnoDB;`,
    );
  }

  override down(): void | Promise<void> {
    this.addSql(`drop table if exists \`todo\`;`);
  }
}
