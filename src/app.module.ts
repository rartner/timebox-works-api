import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { EventModule } from './events/event.module';
import { GoalModule } from './goals/goal.module';
import { SideTopicModule } from './sidetopics/side-topic.module';
import { APP_INTERCEPTOR, APP_FILTER } from '@nestjs/core';
import { TransformInterceptor } from './configs/transform.interceptor';
import { HttpExceptionFilter } from './configs/exception.interceptor';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    EventModule,
    GoalModule,
    SideTopicModule
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule { }
