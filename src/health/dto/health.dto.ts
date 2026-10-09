import { IsNotEmpty, IsNumber, IsPositive } from "class-validator";

export class healthDTO {
    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    weight!: number;

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    height!: number;
}