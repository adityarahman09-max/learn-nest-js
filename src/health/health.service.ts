import { Injectable } from '@nestjs/common';
import { healthDTO } from './dto/health.dto.js';

@Injectable()
export class HealthService {
  BMI(dto: healthDTO) {
    const height = dto.height;
    const weight = dto.weight;
    const bmi = weight / height ** 2;

    let status = 'Normal';

    if (bmi < 18.5) status = 'Underweight';
    else if (bmi >= 25 && bmi < 30) status = 'Overweight';
    else if (bmi >= 30) status = 'Obese';

    return { message: 'BMI calculated', data: { ...dto, bmi, status } };
  }
}
