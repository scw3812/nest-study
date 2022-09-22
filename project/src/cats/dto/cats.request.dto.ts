import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CatRequestDto {
  @ApiProperty({
    example: 'scw38123@naver.com',
    description: 'email',
    required: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 'sdfdsfdsf',
    description: 'password',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    example: 'blue',
    description: 'name',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}
