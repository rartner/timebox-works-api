import { Controller, Post, Body, Get, Param, Delete, Put } from '@nestjs/common';
import { CreateEventDto } from './dtos/create-event.dto';
import { EventService } from './event.service';
import { GetEventDto } from './dtos/get-event.dto';
import { toGetEventDto } from './dtos/get-event.mapper';

@Controller('v1/events')
export class EventController {
	constructor(private eventService: EventService) { }

	@Post()
	async create(@Body() createEventDto: CreateEventDto): Promise<GetEventDto> {
		return this.eventService.createEvent(createEventDto)
			.then(toGetEventDto);
	}

	@Get(':id')
	async find(@Param('id') id: string): Promise<GetEventDto> {
		return this.eventService.findEvent(id).then(toGetEventDto);
	}

	@Delete(':id')
	async delete(@Param('id') id: string): Promise<GetEventDto> {
		return this.eventService.findEvent(id).then(toGetEventDto);
	}

	@Put(':id')
	async update(@Param('id') id: string, @Body() createEventDto: CreateEventDto): Promise<GetEventDto> {
		return this.eventService.findEvent(id).then(toGetEventDto);
	}

	@Post(':eventId/side-topics')
	async createSideTopics(@Param('id') id: string, @Body() createEventDto: CreateEventDto): Promise<GetEventDto> {
		return this.eventService.createEvent(createEventDto)
			.then(toGetEventDto);
	}
}