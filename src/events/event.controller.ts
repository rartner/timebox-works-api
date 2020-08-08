import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CreateEventDto } from './dtos/create-event.dto';
import { Event } from './event.entity';
import { EventService } from './event.service';
import { GetEventDto } from './dtos/get-event.dto';

@Controller('events')
export class EventController {
	constructor(private eventService: EventService) { }

	@Post()
	async create(@Body() createEventDto: CreateEventDto): Promise<Event> {
		return this.eventService.createEvent(createEventDto);
	}

	@Get()
	async list(): Promise<GetEventDto[]> {
		return this.eventService.listEvents();
	}

	@Get(':id')
	async find(@Param() params): Promise<GetEventDto> {
		return this.eventService.findEvent(params.id);
	}
}