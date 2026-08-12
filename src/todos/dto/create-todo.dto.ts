import { IsBoolean, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 255)
  title!: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 65535)
  content!: string;

  @IsBoolean()
  done!: boolean;
}
