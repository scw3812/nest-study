import { ApiProperty } from '@nestjs/swagger';

export class ReadOnlyCatDto {
  @ApiProperty({
    example: '_sfdfdsfdsf',
    description: 'id',
  })
  id: string;

  @ApiProperty({
    example: 'scw38123@naver.com',
    description: 'email',
  })
  email: string;

  @ApiProperty({
    example: 'blue',
    description: 'name',
  })
  name: string;
}
