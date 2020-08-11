import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CreateEventDto } from './dtos/create-event.dto';
import { EventService } from './event.service';
import { GetEventDto } from './dtos/get-event.dto';
import { toGetEventDto } from './dtos/get-event.mapper';

@Controller('events')
export class EventController {
	constructor(private eventService: EventService) { }

	@Post()
	async create(@Body() createEventDto: CreateEventDto): Promise<GetEventDto> {
		return this.eventService.createEvent(createEventDto)
			.then(toGetEventDto);
	}

	@Get()
	async list(): Promise<GetEventDto[]> {
		return this.eventService.listEvents()
			.then(events => events.map(toGetEventDto));
	}

	@Get(':id')
	async find(@Param() params): Promise<GetEventDto> {
		return this.eventService.findEvent(params.id)
			.then(toGetEventDto);
	}
}