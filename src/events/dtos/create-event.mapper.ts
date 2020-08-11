import { CreateEventDto } from './create-event.dto';
import { Event } from '../event.entity';
import { toEntity as CreateGoalToEntity } from './../../goals/dtos/create-goal.mapper';

const toEntity = (createEventDto: CreateEventDto): Event => {
	const goals = createEventDto.goals
		? createEventDto.goals.map(goal => CreateGoalToEntity(goal)) : [];

	return {
		name: createEventDto.name,
		description: createEventDto.description,
		expectedStartDate: createEventDto.expectedStartDate,
		expectedEndDate: createEventDto.expectedEndDate,
		goals: goals,
	} as Event;
};

export { toEntity };