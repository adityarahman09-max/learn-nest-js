import { IsNotEmpty, IsNumber, IsPositive } from "class-validator";

export class GeometryDTO {
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    radius!: number

    
}