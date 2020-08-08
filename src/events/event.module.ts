import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventRepository } from './event.repository';
import { EventController } from './event.controller';
import { EventService } from './event.service';

@Module({
	controllers: [EventController],
	providers: [EventService],
	imports: [TypeOrmModule.forFeature([EventRepository])]
})
export class EventModule { };