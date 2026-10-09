import { IsNumber, Max, Min } from 'class-validator';

export class academicDTO {
  @IsNumber()
  @Max(100, { message: 'Nilai tidak boleh lebih dari 100' })
  @Min(0, { message: 'Nilai tidak boleh kurang dari 0' })
  score!: number;
}
