import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EventRepository } from './event.repository';
import { CreateEventDto } from './dtos/create-event.dto';
import { toEntity } from './dtos/create-event.mapper';
import { Event } from './event.entity';
import { GetEventDto } from './dtos/get-event.dto';
import { toGetEventDto } from './dtos/get-event.mapper';

@Injectable()
export class EventService {
	constructor(
		@InjectRepository(EventRepository)
		private eventRepository: EventRepository,
	) { }

	async createEvent(createEventDto: CreateEventDto): Promise<Event> {
		const entity = toEntity(createEventDto);

		const event = await this.eventRepository.save(entity);

		return event;
	}

	async listEvents(): Promise<Event[]> {
		return this.eventRepository.find({
			relations: ['goals', 'sideTopics'],
			order: { createdAt: 'ASC' }
		});
	}

	async findEvent(id: string): Promise<Event> {
		return this.eventRepository.findOne(id, {
			relations: ['goals', 'sideTopics'],
			order: { createdAt: 'ASC' }
		});
	}
}