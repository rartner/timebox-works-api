import { CreateEventDto } from './create-event.dto';
import { Event } from '../event.entity';

const toEntity = (createEventDto: CreateEventDto): Event => {
	return {
		name: createEventDto.name,
		description: createEventDto.description,
		expectedStartDate: createEventDto.expectedStartDate,
		expectedEndDate: createEventDto.expectedEndDate,
	} as Event;
};

export { toEntity };