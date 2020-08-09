import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { EventModule } from './events/event.module';
import { GoalModule } from './goals/goal.module';
import { SideTopicModule } from './sidetopics/side-topic.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    EventModule,
    GoalModule,
    SideTopicModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
