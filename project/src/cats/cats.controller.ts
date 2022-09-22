import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { CatsService } from './cats.service';
import { SuccessInterceptor } from '../common/interceptors/success.interceptor';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
export class CatsController {
  constructor(private readonly castsService: CatsService) {}

  @Get()
  getCurrentCat() {
    return 'current cat';
  }
}
