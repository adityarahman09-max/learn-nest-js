import { Injectable } from '@nestjs/common';
import { shopDTO } from './dto/shop.dto.js';

@Injectable()
export class ShopService {
    finalScore(dto: shopDTO){
        const finalPrice = dto.price - (dto.price * dto.disc/100)

        return {
            message: "Discount Calculated",

            data: {
                originalPrice: dto.price,
                discounted: dto.disc,
                savedAmount: dto.price * dto.disc/100,
                finalPrice: Number(finalPrice)
            }
        }
    }
}
