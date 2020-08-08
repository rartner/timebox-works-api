import { CreateEventDto } from './create-event.dto';
import { Event } from '../event.entity';

const toEntity = (createEventDto: CreateEventDto): Event => {
	var event = new Event();

	event.name = createEventDto.name;
	event.description = createEventDto.description;
	event.expectedStartDate = createEventDto.expectedStartDate;
	event.expectedEndDate = createEventDto.expectedEndDate;

	return event;
};

export { toEntity };