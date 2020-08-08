import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { EventModule } from './events/event.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), EventModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
