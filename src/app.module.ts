import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { GeometryModule } from './geometry/geometry.module.js';
import { HealthModule } from './health/health.module.js';
import { ShopModule } from './shop/shop.module.js';
import { AcademicModule } from './academic/academic.module.js';
import { UtilityModule } from './utility/utility.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'learn-nestjs',
    }),
    GeometryModule,
    HealthModule,
    ShopModule,
    AcademicModule,
    UtilityModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
