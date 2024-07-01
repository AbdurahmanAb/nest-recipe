import { IsInt, IsString } from 'class-validator';

export class CreateCommentDto {

  @IsString()
  comment: string;

  @IsInt()
  recipeId: number;



}
