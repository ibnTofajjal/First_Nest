import { IsEmail, IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export class CreateCustomerDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumberString()
  id: number;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
