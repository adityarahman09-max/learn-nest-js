import { Body, Controller, Post } from '@nestjs/common';
import { UtilityService } from './utility.service.js';
import { UtilityDTO } from './dto/utility.dto.js';

@Controller('utility')
export class UtilityController {
  constructor(private readonly utilityService: UtilityService) {}
  @Post('temperature')
  temperatureConvert(@Body() dto: UtilityDTO) {
    return this.utilityService.temperatureConverter(dto);
  }
}
