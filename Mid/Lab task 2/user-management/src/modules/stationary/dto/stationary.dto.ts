import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateStationaryDto {
  @IsNotEmpty()
  name: string = "";

  @IsNotEmpty()
  brand: string = "";

  @IsNotEmpty()
  unit_number: number = 0;

  @IsNotEmpty()
  price: number = 0;
}

export class UpdateStationaryDto {
  @IsOptional()
  name: string = "";

  @IsOptional()
  brand: string = "";

  @IsOptional()
  unit_number: number = 0;

  @IsOptional()
  price: number = 0;
}
