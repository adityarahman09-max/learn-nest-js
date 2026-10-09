import { IsNotEmpty, IsNumber, IsPositive } from "class-validator";

export class shopDTO {
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    price!: number;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    disc!: number;
}