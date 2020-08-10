import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EventRepository } from './event.repository';
import { CreateEventDto } from './dtos/create-event.dto';
import { toEntity } from './dtos/create-event.mapper';
import { Event } from './event.entity';
import { GetEventDto } from './dtos/get-event.dto';
import { toDto } from './dtos/get-event.mapper';

@Injectable()
export class EventService {
	constructor(
		@InjectRepository(EventRepository)
		private eventRepository: EventRepository,
	) { }

	async createEvent(createEventDto: CreateEventDto): Promise<Event> {
		return this.eventRepository.save(toEntity(createEventDto));
	}

	async listEvents(): Promise<GetEventDto[]> {
		return (await this.eventRepository.find({
			relations: ['goals', 'sideTopics']
		})).map(event => toDto(event));
	}

	async findEvent(id: string): Promise<GetEventDto> {
		return this.eventRepository.findOne(id, {
			relations: ['goals', 'sideTopics']
		}).then(event => toDto(event));
	}
}