import { IsEnum, IsNumber } from "class-validator";

export enum TemperatureUnit {
    CELCIUS = "CELCIUS",
    FAHRENHAIT = "FAHRENHEIT"
}

export class UtilityDTO {
    @IsNumber()
    value!: number

    @IsEnum(TemperatureUnit)
    from!: TemperatureUnit

    @IsEnum(TemperatureUnit)
    to!: TemperatureUnit
}