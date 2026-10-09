import { Injectable } from '@nestjs/common';
import { UtilityDTO } from './dto/utility.dto.js';

@Injectable()
export class UtilityService {
  temperatureConverter(dto: UtilityDTO) {
    let result = dto.value;
    if (dto.from === 'CELCIUS' && dto.to === 'FAHRENHEIT') {
      result = (dto.value * 9) / 5 + 32;
    } else if (dto.from === 'FAHRENHEIT' && dto.to === 'CELCIUS') {
      result = ((dto.value - 32) * 5) / 9;
    }
    return {
      message: 'Temperature converted',
      data: {
        input: { value: dto.value, unit: dto.from },
        output: { value: Number(result.toFixed(2)), unit: dto.to },
      },
    };
  }
}
