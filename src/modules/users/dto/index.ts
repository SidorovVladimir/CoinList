import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsString()
  password: string;
  @IsString()
  email: string;
  @IsNumber()
  age: number;
  @IsString()
  gender: string;
  @IsBoolean()
  problems: boolean;
}
