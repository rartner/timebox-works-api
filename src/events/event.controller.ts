import { Controller, Post, Body } from '@nestjs/common';
import { CreateEventDto } from './dtos/create-event.dto';
import { Event } from './event.entity';
import { EventService } from './event.service';

@Controller('events')
export class EventController {
	constructor(private eventService: EventService) { }

	@Post()
	async create(@Body() createEventDto: CreateEventDto): Promise<Event> {
		return this.eventService.createEvent(createEventDto);
	}
}