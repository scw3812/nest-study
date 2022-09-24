import { ApiProperty } from '@nestjs/swagger';

export class LoginResponseDto {
  @ApiProperty({
    example: 'sdfdsfsdfs',
    description: 'token',
  })
  token: string;
}
