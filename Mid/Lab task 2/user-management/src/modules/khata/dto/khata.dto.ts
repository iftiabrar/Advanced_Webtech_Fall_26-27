import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateKhataDto {
  @IsNotEmpty()
  brand: string = "";

  @IsNotEmpty()
  pages: number = 0;

  @IsNotEmpty()
  quantity: number = 0;

  @IsNotEmpty()
  price: number = 0;
}

export class UpdateKhataDto {
  @IsOptional()
  brand: string = "";

  @IsOptional()
  pages: number = 0;

  @IsOptional()
  quantity: number = 0;

  @IsOptional()
  price: number = 0;
}
