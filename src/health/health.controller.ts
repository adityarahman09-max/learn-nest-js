import { Body, Controller, Post } from '@nestjs/common';
import { HealthService } from './health.service.js';
import { healthDTO } from './dto/health.dto.js';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}
  @Post("bmi")
  bmi(@Body() dto:healthDTO){
    return this.healthService.BMI(dto)
  }
}
