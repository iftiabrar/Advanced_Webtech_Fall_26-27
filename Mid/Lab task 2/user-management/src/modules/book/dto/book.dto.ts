import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateBookDto {
  @IsNotEmpty()
  title: string = "";

  @IsNotEmpty()
  author: string = "";

  @IsNotEmpty()
  pages: number = 0;

  @IsNotEmpty()
  price: number = 0;
}

export class UpdateBookDto {
  @IsOptional()
  title: string = "";

  @IsOptional()
  author: string = "";

  @IsOptional()
  pages: number = 0;

  @IsOptional()
  price: number = 0;
}
